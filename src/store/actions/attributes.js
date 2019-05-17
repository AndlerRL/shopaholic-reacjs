import * as actionTypes from './actionTypes';

export const attributeSuccess = (attrId, name) => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES,
    attributeId: attrId,
    name: name
  }
}
export const attributeFail = error => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_FAIL,
    error: error
  }
}
export const attributeIdSuccess = attrId => {
  return {
    type: actionTypes.FETCH_ATTRIBUTES_ID,
    attrId: attrId
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