import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* createOrderSaga(action) {
  yield put(actions.ordersStart());

  try {
    const orderData = {
      cart_id: action.cart_id,
      shipping_id: action.shipping_id,
      tax_id: action.tax_id
    }
    const response = yield Axios.post('/orders', orderData);
    console.log('CREATE ORDER RES: ', response);
    yield put(actions.ordersSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ordersFail(error));
  }
}

export function* fetchOrderIdSaga(action) {
  yield put(actions.ordersIdStart());

  try {
    const response = yield Axios.get(`/orders/${action.orderId}`);
    console.log('FETCH ORDER ID RES: ', response);
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
    console.log('ORDERS IN CUSTOMER RES: ', response);
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
    console.log('SHORT DETAIL ORDER RES: ', response);
    yield put(actions.ordersShortDetailsSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ordersShortDetailsFail(error));
  }
}