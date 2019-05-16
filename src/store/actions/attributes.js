import * as actionTypes from './actionTypes';

export const attributeStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_START
  }
}
export const attributeSuccess = () => {
  return {
    type: actionTypes.ATTRIBUTES_SUCCESS
  }
}
export const attributeFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_FAIL
  }
}
export const attributeIdStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_ID_START
  }
}
export const attributeIdSuccess = attrId => {
  return {
    type: actionTypes.ATTRIBUTES_ID_SUCCESS,
    attrId: attrId
  }
}
export const attributeIdFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_ID_FAIL,
    error: error
  }
}
export const attributeValuesStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_START
  }
}
export const attributeValuesSuccess = valueId => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_SUCCESS,
    valueId: valueId
  }
}
export const attributeValuesFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_VALUES_ID_FAIL,
    error: error
  }
}
export const attributeInProductStart = () => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_START
  }
}
export const attributeInProductSuccess = productId => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_SUCCESS,
    productID: productId
  }
}
export const attributeInProductFail = error => {
  return {
    type: actionTypes.ATTRIBUTES_IN_PRODUCT_FAIL,
    error: error
  }
}