import * as actionTypes from './actionTypes';

export const attributesStart = () => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_START
  }
}
export const attributeSuccess = (size, color) => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_SUCCESS,
    size: size,
    color: color
  }
}
export const attributeFail = error => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_FAIL,
    error: error
  }
}
export const fetchAttributes = (size, color) => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES,
    size: size,
    color: color
  }
}
export const attributeId = (sizeId, colorId) => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_ID,
    sizeId: sizeId,
    colorId: colorId
  }
}
export const attributeIdSuccess = (sizeId, colorId) => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_ID_SUCCESS,
    sizeId: sizeId,
    colorId: colorId
  }
}
export const attributeIdFail = error => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_ID_FAIL,
    error: error
  }
}
export const attributeValuesStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_START
  }
}
export const attributeValuesSuccess = (sizeVal, colorVal) => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_SUCCESS,
    sizeVal: sizeVal,
    colorVal: colorVal
  }
}
export const attributeValuesFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_FAIL,
    error: error
  }
}
export const attributeValues = (sizeVal, colorVal) => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID,
    sizeVal: sizeVal,
    colorVal: colorVal
  }
}
export const attributesInProduct = productId => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT,
    productId: productId
  }
}
export const attributeInProductStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_START
  }
}
export const attributeInProductSuccess = (productId, productAttributes) => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_SUCCESS,
    productID: productId,
    productAttributes: productAttributes
  }
}
export const attributeInProductFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_FAIL,
    error: error
  }
}