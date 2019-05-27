import { put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* generateCartIdSaga(action) {
  yield put(actions.shoppingCartGenerateIdStart());

  try {
    const response = yield Axios.get('/shoppingcart/generateUniqueId');
    yield localStorage.setItem('cart_id', JSON.stringify(response.data.cart_id));

    yield put(actions.shoppingCartGenerateIdSuccess(response.data.cart_id));
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartGenerateIdFail(error));
  }
}

export function* addProductToCartSaga(action) {
  yield put(actions.shoppingCartAddStart())

  try {
    const response = yield Axios.post('/shoppingcart/add', action.productData);
    console.log(response);

    yield put(actions.shoppingCartAddSuccess(response.data))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartAddFail(error));
  }
}

export function* fetchCartSaga(action) {
  yield put(actions.shoppingCartStart());

  try {
    const cart_id = yield JSON.parse(localStorage.getItem('cart_id'));
    const response = yield Axios.get(`/shoppingcart/${cart_id}`);

    yield put(actions.shoppingCartSuccess(response.data))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartFail(error));
  }
}

export function* fetchTotalAmountSaga(action) {
  try {
    const cart_id = yield JSON.parse(localStorage.getItem('cart_id'));
    const response = yield Axios.get(`/shoppingcart/totalAmount/${cart_id}`)
    console.log(response.data.total_amount)

    yield put(actions.shoppingCartTotalSuccess(response.data.total_amount))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartTotalFail(error))
  }
}