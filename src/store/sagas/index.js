import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga, paginationNextSaga, paginationPrevSaga } from './products';
import { fetchAttributesSaga, fetchAttributesValuesSaga } from './attributes';
import { fetchCategoriesSaga } from './categories';

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
  
}

export function* watchOrders() {

}

export function* watchProducts() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
  yield takeEvery(actionTypes.PRODUCTS_NEXT, paginationNextSaga);
  yield takeEvery(actionTypes.PRODUCTS_PREV, paginationPrevSaga);
}

export function* watchShoppingCart() {
  
}

export function* watchShipping() {
  
}

export function* watchStripe() {
  
}

export function* watchTax() {
  
}