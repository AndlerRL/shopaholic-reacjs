import { delay, put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* productsSaga(action) {
  yield put(actions.productsStart());
  const queryParams = `?page=${action.page}&limit=${action.limit}&description_length=${action.description_length}`;
  try {
    const response = yield Axios.get('/products' + queryParams);
    console.log(response);
    const fetchedProducts = [];
    yield put(actions.productsSuccess(1, 20, 200, fetchedProducts));
  } catch (error) {
    
  }
}