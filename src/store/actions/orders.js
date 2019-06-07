import * as actionTypes from './actionTypes';

export const createOrder = orderData => {
  return {
    type: actionTypes.CREATE_ORDER,
    orderData: orderData
  }
}
export const ordersStart = () => {
  return {
    type: actionTypes.ORDERS_START
  }
}
export const ordersSuccess = orderId => {
  return {
    type: actionTypes.ORDERS_SUCCESS,
    orderId: orderId
  }
}
export const ordersFail = error => {
  return {
    type: actionTypes.ORDERS_FAIL,
    error: error
  }
}
export const orderId = orderId => {
  return {
    type: actionTypes.ORDERS_ID_INIT,
    orderId: orderId
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
    order: orderId
  }
}
export const ordersIdFail = error => {
  return {
    type: actionTypes.ORDERS_ID_FAIL,
    error: error
  }
}
export const fetchOrdersInCustomer = () => {
  return {
    type: actionTypes.ORDERS_IN_CUSTOMER_INIT
  }
}
export const ordersCustomerStart = () => {
  return {
    type: actionTypes.ORDERS_IN_CUSTOMER_START
  }
}
export const ordersCustomerSuccess = orderData => {
  return {
    type: actionTypes.ORDERS_IN_CUSTOMER_SUCCESS,
    orderData: orderData
  }
}
export const ordersCustomerFail = error => {
  return {
    type: actionTypes.ORDERS_FAIL,
    error: error
  }
}
export const orderShortDetail = orderId => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_INIT,
    orderId: orderId
  }
}
export const ordersShortDetailsStart = () => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_START
  }
}
export const ordersShortDetailsSuccess = orderDetail => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_SUCCESS,
    orderDetail: orderDetail
  }
}
export const ordersShortDetailsFail = error => {
  return {
    type: actionTypes.ORDERS_SHORT_DETAIL_FAIL,
    error: error
  }
}
export const onCheckout = () => {
  return {
    type: actionTypes.ORDERS_ON_CHECKOUT
  }
}
export const confirmOrderError = () => {
  return {
    type: actionTypes.ORDERS_CONFIRM_ERROR
  }
}
export const confirmPurchase = () => {
  return {
    type: actionTypes.ORDERS_CONFIRM
  }
}