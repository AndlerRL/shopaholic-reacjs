import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* generateCartIdSaga(action) {
  yield put(actions.shoppingCartGenerateIdStart());

  try {
    const response = yield Axios.get('/shoppingcart/generateUniqueId');

    yield put(actions.shoppingCartGenerateIdSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartGenerateIdFail(error));
  }
}

export function* addProductToCartSaga(action) {
  yield put(actions.shoppingCartAddStart())

  try {
    const response = yield Axios.post('shoppingcart/add', action.productData);

    yield put(actions.shoppingCartAddSuccess(response.data, action.productData))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartAddFail(error));
  }
}