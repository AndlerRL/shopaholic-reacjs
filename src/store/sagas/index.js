import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga, paginationNextSaga, paginationPrevSaga } from './products';
import { fetchAttributesSaga, fetchAttributesValuesSaga } from './attributes';
import { fetchCategoriesSaga } from './categories';
import { fetchDepartmentsSaga, fetchDepartmentIdSaga } from './departments';

export function* watchAttributes() {
  yield takeEvery(actionTypes.FETCH_ATTRIBUTES, fetchAttributesSaga)
  yield takeEvery(actionTypes.ATTRIBUTES_VALUES_ID, fetchAttributesValuesSaga)
}

export function* watchAuth() {
  
}

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
}

export function* watchDepartments() {
  yield takeEvery(actionTypes.FETCH_DEPARTMENTS, fetchDepartmentsSaga);
  yield takeEvery(actionTypes.FETCH_DEPARTMENTS_ID, fetchDepartmentIdSaga);
}

export function* watchOrders() {

}

export function* watchProducts() {
  yield all([
    takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga),
    takeEvery(actionTypes.PRODUCTS_NEXT, paginationNextSaga),
    takeEvery(actionTypes.PRODUCTS_PREV, paginationPrevSaga)
  ])
}

export function* watchShoppingCart() {
  
}

export function* watchShipping() {
  
}

export function* watchStripe() {
  
}

export function* watchTax() {
  
}