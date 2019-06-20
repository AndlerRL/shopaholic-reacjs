import {
  put
} from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* stripeChargeSaga(action) {
  yield put(actions.stripeChargeStart());

  try {
    const response = yield Axios.post('stripe/charge', action.chargeOrder);

    //console.log('STRIPE CHARGE RESPONSE FROM TURING API:\n', response);
    yield put(actions.stripeChargeSuccess(response.data))
    yield put(actions.stripeWebhooks())
  } catch (error) {
    console.error(error);
    yield put(actions.stripeChargeFail(error));
  }
}

export function* stripeWebhooksSaga(action) {
  yield put(actions.stripeWebhooksStart());

  try {
    const response = yield Axios.post('/stripe/webhooks', null);

    //console.log(response);
    yield put(actions.stripeWebhooksSuccess(response.data.received));
  } catch (error) {
    console.error(error);
    yield put(actions.stripeWebhooksFail(error));
  }
}