import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga, paginationNextSaga, paginationPrevSaga } from './products';

export function* watchAttributes() {
  
}

export function* watchAuth() {
  
}

export function* watchCategories() {
  
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