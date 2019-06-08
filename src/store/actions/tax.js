import * as actionTypes from './actionTypes';

export const fetchTaxes = () => {
  return {
    type: actionTypes.FETCH_TAX_INIT
  }
}
export const fetchTax = taxes => {
  return {
    type: actionTypes.FETCH_TAX,
    taxes: taxes
  }
}
export const fetchTaxFail = error => {
  return {
    type: actionTypes.FETCH_TAX_FAIL,
    error: error
  }
}
export const taxById = taxId => {
  return {
    type: actionTypes.TAX_ID_INIT,
    taxId: taxId
  }
}
export const taxId = taxId => {
  return {
    type: actionTypes.TAX_ID,
    taxId: taxId
  }
}
export const taxIdFail = error => {
  return {
    type: actionTypes.TAX_ID_FAIL,
    error: error
  }
}