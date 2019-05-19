import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { productsSaga } from './products';

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
  yield all([
    takeEvery(actionTypes.PRODUCTS_SUCCESS, productsSaga)
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