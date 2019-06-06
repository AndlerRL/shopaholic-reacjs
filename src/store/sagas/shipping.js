import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchRegionsSaga(action) {
  try {
    const response = yield Axios.get('/shipping/regions');
    
    yield put(actions.fetchShipping(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.fetchShippingFail(error))
  }
}

export function* regionIdSaga(action) {
  yield put(actions.shippingIdStart());

  try {
    const response = yield Axios.get(`/shipping/regions/${action.shippingRegionId}`);
    
    yield put(actions.shippingIdSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.shippingIdFail(error));
  }
}