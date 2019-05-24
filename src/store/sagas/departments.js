import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchDepartmentsSaga(action) {
  yield put(actions.departmentsStart())

  try {
    const response = yield Axios.get('/departments');
    //console.log(response);
    yield put(actions.departmentsSuccess(response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.departmentsFail(error));
  }
}

export function* fetchDepartmentIdSaga(action) {
  try {
    const response = yield Axios.get(`/departments/${action.departmentId}`)
    //console.log('action.departmentId ', action.departmentId)

    yield put(actions.departmentsIdSuccess(action.departmentId, response.data, response.data.name))
  } catch(error) {
    console.log(error);
    yield put(actions.departmentsIdFail(error));
  }
}