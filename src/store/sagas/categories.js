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

export function* fetchCategoryIdSaga(action) {
  try {
    const response = yield Axios.get(`/categories/${action.categoryId}`)

    yield put(actions.categoryId(action.categoryId, response.data, response.data.name))
  } catch(error) {
    console.log(error);
    yield put(actions.categoryIdFail(error));
  }
}

export function* fetchCategoriesInProductSaga(action) {
  yield put(actions.categoriesInProductStart);

  try {
    const response = yield Axios.get(`/categories/inProduct/${action.productId}`)

    yield put(actions.categoriesInProductSuccess(action.productId, response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.categoriesInProductFail(error));
  }
}

export function* fetchCategoriesInDepartmentSaga(action) {
  yield put(actions.categoriesInDepartmentStart);

  try {
    const response = yield Axios.get(`/categories/inDepartment/${action.productId}`);

    yield put(actions.categoriesInDepartmentSuccess(action.productId, response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.categoriesInDepartmentFail(error));
  }
}