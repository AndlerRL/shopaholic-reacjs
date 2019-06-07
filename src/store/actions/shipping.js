import * as actionTypes from './actionTypes';

export const fetchRegions = () => {
  return {
    type: actionTypes.SHIPMENT_AVAILABLE
  }
}
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
export const regionId = regionId => {
  return {
    type: actionTypes.SHIPPING_OPTIONS,
    regionId: regionId
  }
}
export const shippingIdStart = () => {
  return {
    type: actionTypes.SHIPPING_ID_START
  }
}
export const shippingIdSuccess = shippingOpt => {
  return {
    type: actionTypes.SHIPPING_ID_SUCCESS,
    shippingOpt: shippingOpt
  }
}
export const shippingIdFail = error => {
  return {
    type: actionTypes.SHIPPING_ID_FAIL,
    error: error
  }
}
export const confirmShippingError = () => {
  return {
    type: actionTypes.SHIPPING_CONFIRM_ERROR
  }
}