import * as actionTypes from './actionTypes';

export const fetchTax = taxId => {
  return {
    type: actionTypes.FETCH_TAX,
    taxId: taxId
  }
}
export const fetchTaxFail = error => {
  return {
    type: actionTypes.FETCH_TAX_FAIL,
    error: error
  }
}