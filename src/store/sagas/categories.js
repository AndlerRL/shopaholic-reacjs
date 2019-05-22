import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';


export function* fetchCategoriesSaga(action) {
  yield put(actions.categoriesStart())
  try {
    const response = yield Axios.get('/categories');

    yield put(actions.categoriesSuccess(response.data.rows));
  } catch(error) {
    console.log(error);
    yield put(actions.categoriesFail(error));
  }
}