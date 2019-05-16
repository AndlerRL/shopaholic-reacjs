import * as actionTypes from './actionTypes';

export const ordersStart = () => {
  return {
    type: actionTypes.ORDERS_START
  }
}
export const ordersSuccess = (cartId, shippingId, taxId) => {
  return {
    type: actionTypes.ORDERS_SUCCESS,
    cartId: cartId,
    shippingId: shippingId,
    taxId: taxId
  }
}
export const ordersFail = error => {
  return {
    type: actionTypes.ORDERS_FAIL,
    error: error
  }
}
export const ordersIdStart = () => {
  return {
    type: actionTypes.ORDERS_ID_START
  }
}
export const ordersIdSuccess = orderId => {
  return {
    type: actionTypes.ORDERS_ID_SUCCESS,
    orderId: orderId
  }
}
export const ordersIdFail = error => {
  return {
    type: actionTypes.ORDERS_ID_FAIL,
    error: error
  }
}
export const ordersCustomerStart = () => {
  return {
    type: actionTypes.ORDERS_IN_CUSTOMER_START
  }
}
export const ordersCustomerSuccess = () => {
  return {
    type: actionTypes.ORDERS_IN_CUSTOMER_SUCCESS
  }
}
export const ordersCustomerFail = error => {
  return {
    type: actionTypes.ORDERS_FAIL,
    error: error
  }
}
export const ordersShortDetailsStart = () => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_START
  }
}
export const ordersShortDetailsSuccess = orderId => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_SUCCESS,
    orderId: orderId
  }
}
export const ordersShortDetailsFail = error => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_FAIL,
    error: error
  }
}