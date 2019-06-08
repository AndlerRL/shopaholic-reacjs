import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchTaxesSaga(action) {
  try {
    const response = yield Axios.get('/tax');
    
    yield put(actions.fetchTax(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.fetchTaxFail(error));
  }
}

export function* taxIdSaga(action) {
  try {
    const response = yield Axios.get(`/tax/${action.taxId}`);
    
    yield put(actions.taxId(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.taxIdFail(error));
  }
}