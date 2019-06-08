import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga,
  paginationNextSaga,
  paginationPrevSaga,
  paginationCatNextSaga,
  paginationCatPrevSaga,
  paginationDeptNextSaga,
  paginationDeptPrevSaga,
  productDataSaga,
  productLocationSaga,
  productReviewsSaga,
  postProductReviewSaga,
  searchProductSaga,
  productsInDepartmentSaga,
  productsInCategoriesSaga } from './products';
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
import { 
  generateCartIdSaga,
  addProductToCartSaga, 
  fetchCartSaga,
  fetchTotalAmountSaga,
  updateProductCartSaga,
  removeProductCartSaga,
  emptyCartSaga,
  saveForLaterSaga,
  fetchSaveForLaterSaga,
  moveToCartSaga } from './shopping';
import {
  authCheckStateSaga,
  checkAuthTimeoutSaga,
  loginUserSaga,
  loginFbUserSaga,
  logoutSaga,
  registerUserSaga,
  updateCustomerSaga,
  updateCustomerAddressSaga,
  updateCCSaga,
} from './auth';
import {
  fetchRegionsSaga,
  regionIdSaga
} from './shipping';
import {
  createOrderSaga,
  fetchOrderIdSaga,
  ordersInCustomerSaga,
  ordersShortDetailSaga
} from './orders';
import {
  taxIdSaga,
  fetchTaxesSaga
} from './tax';
import {
  stripeChargeSaga,
  stripeWebhooksSaga
} from './stripe';

export function* watchAttributes() {
  yield takeEvery(actionTypes.FETCH_ATTRIBUTES, fetchAttributesSaga)
  yield takeEvery(actionTypes.ATTRIBUTES_VALUES_ID, fetchAttributesValuesSaga)
  yield takeEvery(actionTypes.ATTRIBUTES_IN_PRODUCT, attributesInProductSaga)
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, loginUserSaga);
  yield takeEvery(actionTypes.AUTH_USER_FB, loginFbUserSaga);
  yield takeEvery(actionTypes.AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_REGISTER_USER, registerUserSaga);
  yield all([
    takeEvery(actionTypes.UPDATE_USER, updateCustomerSaga),
    takeEvery(actionTypes.UPDATE_USER_ADDRESS, updateCustomerAddressSaga),
    takeEvery(actionTypes.AUTH_USER_CREDIT_CARD, updateCCSaga)
  ]);
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
  yield takeEvery(actionTypes.CREATE_ORDER, createOrderSaga);
  yield takeEvery(actionTypes.ORDERS_ID_INIT, fetchOrderIdSaga);
  yield takeEvery(actionTypes.ORDERS_IN_CUSTOMER_INIT, ordersInCustomerSaga);
  yield takeEvery(actionTypes.ORDERS_SHORT_DETAIL_INIT, ordersShortDetailSaga);
}

export function* watchProducts() {
  yield all([
    takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga),
    takeEvery(actionTypes.FETCH_PRODUCTS_IN_CATEGORY, productsInCategoriesSaga),
    takeEvery(actionTypes.FETCH_PRODUCTS_IN_DEPARTMENT, productsInDepartmentSaga),
    takeEvery(actionTypes.PRODUCTS_NEXT, paginationNextSaga),
    takeEvery(actionTypes.PRODUCTS_PREV, paginationPrevSaga),
    takeEvery(actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT, paginationDeptNextSaga),
    takeEvery(actionTypes.PRODUCTS_IN_DEPARTMENT_PREV, paginationDeptPrevSaga),
    takeEvery(actionTypes.PRODUCTS_IN_CATEGORY_NEXT, paginationCatNextSaga),
    takeEvery(actionTypes.PRODUCTS_IN_CATEGORY_PREV, paginationCatPrevSaga),
    takeEvery(actionTypes.PRODUCTS_SEARCH, searchProductSaga)
  ])
  yield takeEvery(actionTypes.FETCH_PRODUCT_DETAIL, productDataSaga)
  yield takeEvery(actionTypes.FETCH_PRODUCT_REVIEWS, productReviewsSaga)
  yield takeEvery(actionTypes.POST_PRODUCT_REVIEW, postProductReviewSaga)
  yield takeEvery(actionTypes.FETCH_PRODUCT_LOCATION, productLocationSaga)
}

export function* watchShoppingCart() {
  yield takeEvery(actionTypes.FETCH_SHOPPING_CART_TOTAL, fetchTotalAmountSaga);
  yield takeEvery(actionTypes.GENERATE_CART_ID, generateCartIdSaga);
  yield takeEvery(actionTypes.ADD_PRODUCT_CART, addProductToCartSaga);
  yield takeEvery(actionTypes.FETCH_SHOPPING_CART, fetchCartSaga);
  yield takeEvery(actionTypes.PUT_UPDATE_PRODUCT, updateProductCartSaga);
  yield takeEvery(actionTypes.SHOPPING_CART_REMOVE_PRODUCT, removeProductCartSaga);
  yield takeEvery(actionTypes.DELETE_SHOPPING_CART, emptyCartSaga);
  yield takeEvery(actionTypes.FETCH_SAVE_FAVORITE, fetchSaveForLaterSaga);
  yield takeEvery(actionTypes.MOVE_TO_CART, moveToCartSaga);
  yield takeEvery(actionTypes.SAVE_FOR_LATER, saveForLaterSaga);
}

export function* watchShipping() {
  yield takeEvery(actionTypes.SHIPMENT_AVAILABLE, fetchRegionsSaga);
  yield takeEvery(actionTypes.SHIPPING_OPTIONS, regionIdSaga);
}

export function* watchStripe() {
  yield all([
    takeEvery(actionTypes.STRIPE_CHARGE_INIT, stripeChargeSaga),
    takeEvery(actionTypes.STRIPE_WEBHOOKS_INIT, stripeWebhooksSaga)
  ]);
}

export function* watchTax() {
  yield takeEvery(actionTypes.TAX_ID_INIT, taxIdSaga);
  yield takeEvery(actionTypes.FETCH_TAX_INIT, fetchTaxesSaga);
}