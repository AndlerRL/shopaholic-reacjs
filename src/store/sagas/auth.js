import { delay, call, put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expDate');
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

    yield localStorage.setItem('token', response.data.accessToken);
    yield localStorage.setItem('expDate', expDate);
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

    yield localStorage.setItem('token', response.data.accessToken);
    yield localStorage.setItem('expDate', expDate); 
    yield put(actions.authSuccess(response.data.accessToken, response.data.customer));
    yield put(actions.checkAuthTimeout(86400000));
  } catch(error) {
    console.log(error);
    yield put(actions.authFail(error))
  }
}

export function* loginFbUserSaga(action) {
  yield put(actions.authFbStart());
  console.log('AVAILABLE ACTIONS FROM FB LOGIN: ', action)
  try {
    const accessToken = {
      access_token: action.accessToken
    }
    const response = yield Axios.post('/customers/facebook', accessToken);
    const expDate = yield new Date(new Date().getTime() + 86400000);
    console.log('LOGIN FB USER RES.DATA: ', response.data);
    yield localStorage.setItem('token', response.data.accessToken);
    yield localStorage.setItem('expDate', expDate); 
    yield put(actions.authFbSuccess(response.data.accessToken, response.data.customer));
    yield put(actions.checkAuthTimeout(86400000));
  } catch(error) {
    console.error(error);
    yield put(actions.authFbFail(error));
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
      const response = yield Axios.get('/customer');
      console.log(response);

      yield put(actions.authSuccess(token, response.data));
      yield put(actions.checkAuthTimeout((expDate.getTime() - new Date().getTime())))
    }
  }
}

export function* updateCustomerSaga(action) {
  yield put(actions.updateCustomerStart())

  try {
    const response = yield Axios.put(`/customer`, action.updateCustomer);
    
    yield put(actions.updateCustomerSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.updateCustomerFail(error));
  }
}

export function* updateCustomerAddressSaga(action) {
  yield put(actions.addressStart());

  try {
    const response = yield Axios.put(`/customers/address`, action.customerAddress);
    
    yield put(actions.addressSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.addressFail(error));
  }
}

export function* updateCCSaga(action) {
  yield put(actions.ccStart());

  try {
    const response = yield Axios.put(`/customers/creditCard`, action.cc);
    console.log('UPDATE CC RES.DATA: ', response.data);
    yield put(actions.ccSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.ccFail(error));
  }
}