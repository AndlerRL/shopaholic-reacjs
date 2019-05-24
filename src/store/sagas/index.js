import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga,
  paginationNextSaga,
  paginationPrevSaga,
  productDataSaga,
  productLocationSaga,
  productReviewsSaga,
  postProductReviewSaga } from './products';
import { 
  fetchAttributesSaga,
  fetchAttributesValuesSaga,
  attributesInProductSaga } from './attributes';
import { 
  fetchCategoriesSaga,
  fetchCategoryIdSaga,
  fetchCategoriesInProductSaga,
  fetchCategoriesInDepartmentSaga } from './categories';
import { 
  fetchDepartmentsSaga,
  fetchDepartmentIdSaga } from './departments';

export function* watchAttributes() {
  yield takeEvery(actionTypes.FETCH_ATTRIBUTES, fetchAttributesSaga)
  yield takeEvery(actionTypes.ATTRIBUTES_VALUES_ID, fetchAttributesValuesSaga)
  yield takeEvery(actionTypes.ATTRIBUTES_IN_PRODUCT, attributesInProductSaga)
}

export function* watchAuth() {
  
}

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
  yield takeEvery(actionTypes.FETCH_CATEGORY_ID, fetchCategoryIdSaga);
  yield takeEvery(actionTypes.FETCH_CATEGORY_IN_PRODUCT, fetchCategoriesInProductSaga);
  yield takeEvery(actionTypes.FETCH_CATEGORY_IN_DEPARTMENT, fetchCategoriesInDepartmentSaga);
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
  yield takeEvery(actionTypes.FETCH_PRODUCT_DETAIL, productDataSaga)
  yield takeEvery(actionTypes.FETCH_PRODUCT_REVIEWS, productReviewsSaga)
  yield takeEvery(actionTypes.POST_PRODUCT_REVIEW, postProductReviewSaga)
  yield takeEvery(actionTypes.FETCH_PRODUCT_LOCATION, productLocationSaga)
}

export function* watchShoppingCart() {
  
}

export function* watchShipping() {
  
}

export function* watchStripe() {
  
}

export function* watchTax() {
  
}