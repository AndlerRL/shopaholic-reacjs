import * as actionTypes from './actionTypes';

export const fetchShipping = regions => {
  return {
    type: actionTypes.FETCH_SHIPPING,
    regions: regions
  }
}
export const fetchShippingFail = error => {
  return {
    type: actionTypes.FETCH_SHIPPING_FAIL,
    error: error
  }
}
export const shippingIdStart = () => {
  return {
    type: actionTypes.SHIPPING_ID_START
  }
}
export const shippingIdSuccess = (regionId, shippingOpt) => {
  return {
    type: actionTypes.SHIPPING_ID_SUCCESS,
    regionId: regionId,
    shippingOpt: shippingOpt
  }
}
export const shippingIdFail = error => {
  return {
    type: actionTypes.SHIPPING_ID_FAIL,
    error: error
  }
}