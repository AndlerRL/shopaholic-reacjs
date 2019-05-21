import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';


export function* fetchCategoriesSaga(action) {
  yield put(actions.categoriesStart())
  try {
    const response = yield Axios.get('/categories');
    console.log(response.data);
    const categories = response.data.rows;
    yield put(actions.categoriesSuccess(categories));
  } catch(error) {
    console.log(error);
    yield put(actions.categoriesFail(error));
  }
}