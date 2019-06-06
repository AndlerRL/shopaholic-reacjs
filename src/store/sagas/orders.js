import { put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* createOrderSaga(action) {
  yield put(actions.ordersStart());

  try {
    const response = yield Axios.post('/orders', action.orderData);
    
    yield put(actions.ordersSuccess(response.data));
    yield call([localStorage, 'removeItem'], 'cart_id');
    yield put(actions.fetchShoppingCart());
  } catch(error) {
    console.error(error);
    yield put(actions.ordersFail(error));
  }
}

export function* fetchOrderIdSaga(action) {
  yield put(actions.ordersIdStart());

  try {
    const response = yield Axios.get(`/orders/${action.orderId}`);
    
    yield put(actions.ordersIdSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ordersIdFail(error));
  }
}

export function* ordersInCustomerSaga(action) {
  yield put(actions.ordersCustomerStart());

  try {
    const response = yield Axios.get('/orders/inCustomer');
    
    yield put(actions.ordersCustomerSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ordersCustomerFail(error));
  }
}

export function* ordersShortDetailSaga(action) {
  yield put(actions.ordersShortDetailsStart());

  try {
    const response = yield Axios.get(`/orders/shortDetail/${action.orderId}`);
    
    yield put(actions.ordersShortDetailsSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ordersShortDetailsFail(error));
  }
}