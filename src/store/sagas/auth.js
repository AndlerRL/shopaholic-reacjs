import { delay, call, put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expData');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expTime);
  yield put(actions.logout());
}

export function* registerUserSaga(action) {
  yield put(actions.authRegisterStart())
  let authData = {
    name: action.name,
    email: action.email,
    password: action.password
  }
  try {
    const response = yield Axios.post('/customers', authData);
    const expDate = yield new Date(new Date().getTime() + 86400000);
    console.log(response);

    yield localStorage.setItem('token', response.data.accessToken);
    yield localStorage.setItem('expDate', expDate);
    yield localStorage.setItem('userID', JSON.stringify(response.data.customer.schema.customer_id))
    yield put(actions.authRegisterSuccess(response.data.accessToken, response.data.customer));
    yield put(actions.checkAuthTimeout(86400000));
  } catch(error) {
    console.log(error);
    yield put(actions.authRegisterFail(error))
  }
}

export function* loginUserSaga(action) {
  yield put(actions.authStart())
  let authData = {
    email: action.email,
    password: action.password
  }
  try {
    const response = yield Axios.post('/customers/login', authData);
    const expDate = yield new Date(new Date().getTime() + 86400000);
    console.log(response);

    yield localStorage.setItem('token', response.data.accessToken);
    yield localStorage.setItem('expDate', expDate);
    yield localStorage.setItem('userID', JSON.stringify(response.data.customer.schema.customer_id))
    yield put(actions.authSuccess(response.data.accessToken, response.data.customer));
    yield put(actions.checkAuthTimeout(86400000));
  } catch(error) {
    console.log(error);
    yield put(actions.authFail(error))
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');

  if (!token)
    yield put(actions.logout());
  else {
    const expDate = yield new Date(localStorage.getItem('expDate'));

    if (expDate <= new Date())
      yield put(actions.logout());
    else {
      const userID = yield JSON.parse(localStorage.getItem('userID'));

      yield put(actions.authSuccess(token, userID));
      yield put(actions.checkAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000))
    }
  }
}