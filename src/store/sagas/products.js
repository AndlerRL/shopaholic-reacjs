import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchProductsSaga(action) {
  yield put(actions.productsStart());
  const queryParams = `?page=${action.page}&limit=10&description_length=50`;
  try {
    yield localStorage.setItem('page', JSON.stringify(1));
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsSuccess(action.page, response.data.rows, response.data.count));
  } catch (error) {
    console.error(error);
    yield put(actions.productsFail(error));
  }
}

export function* paginationNextSaga(action) {
  yield put(actions.productsNextStart())
  try {
    console.log(action.page, action.totalPage)
    const queryParams = `?page=${action.page + 1}&limit=10&description_length=50`;
    const response = yield Axios.get('/products' + queryParams);

    yield put(actions.productsNextSuccess(action.page, action.totalPage, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsNextFail());
  }
}

export function* paginationPrevSaga(action) {
  yield put(actions.productsPrevStart())
  try {
    const queryParams = `?page=${action.page - 1}&limit=10&description_length=50`;
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsPrevSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsPrevFail(error));
  }
}