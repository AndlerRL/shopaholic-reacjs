import { delay, put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';
import { updateObject } from '../../share/utility';

export function* fetchProductsSaga(action) {
  yield put(actions.productsStart());
  const queryParams = `?page=1&limit=10&description_length=50`;
  try {
    yield localStorage.setItem('page', JSON.stringify(1));
    const response = yield Axios.get('/products' + queryParams);
    const fetchedProducts = response.data.rows;
    action.products = fetchedProducts;
    console.log('FETCHING PRODUCTS LOCALLY', fetchedProducts);
    yield put(actions.productsSuccess(localStorage.getItem('page'), fetchedProducts));
  } catch (error) {
    console.error(error);
    yield put(actions.productsFail(error));
  }
}

export function* paginationNextSaga(action) {
  yield put(actions.productsNextStart())
  let nextPage = JSON.parse(localStorage.getItem('page'));
  let updatePage = nextPage + 1;
  yield localStorage.setItem('page', JSON.stringify(updatePage));
  const queryParams = `?page=${updatePage}&limit=10&description_length=50`;
  try {
    const response = yield Axios.get('/products' + queryParams);
    const fetchedProducts = response.data.rows;
    action.products = fetchedProducts
    yield put(actions.productsNextSuccess(updatePage, fetchedProducts));
  } catch (error) {
    console.error(error);
    yield put(actions.productsNextFail());
  }
}

export function* paginationPrevSaga(action) {
  yield put(actions.productsPrevStart())
  let prevPage = JSON.parse(localStorage.getItem('page'));
  let updatePage = prevPage - 1;
  yield localStorage.setItem('page', JSON.stringify(updatePage));
  const queryParams = `?page=${updatePage}&limit=10&description_length=50`;
  try {
    const response = yield Axios.get('/products' + queryParams);
    const fetchedProducts = response.data.rows;
    action.products = fetchedProducts
    yield put(actions.productsPrevSuccess(updatePage, fetchedProducts));
  } catch (error) {
    console.error(error);
    yield put(actions.productsPrevFail());
  }
}