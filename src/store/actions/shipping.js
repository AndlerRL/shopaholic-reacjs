import * as actionTypes from './actionTypes';

export const fetchShipping = () => {
  return {
    type: actionTypes.FETCH_SHIPPING
  }
}
export const fetchShippingFail = error => {
  return {
    type: actionTypes.FETCH_SHIPPING_FAIL,
    error: error
  }
}
export const shippingId = regionId => {
  return {
    type: actionTypes.SHIPPING_ID,
    regionId: regionId
  }
}
export const shippingIdFail = error => {
  return {
    type: actionTypes.SHIPPING_ID_FAIL,
    error: error
  }
}