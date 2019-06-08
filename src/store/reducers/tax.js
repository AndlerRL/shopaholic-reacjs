import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  error: null,
  taxes: [],
  tax: []
}

const fail = (state, action) => {
  return updateObject(state, {
    error: action.error
  })
};
const fetchTaxes = (state, action) => {
  return updateObject(state, {
    error: null,
    taxes: action.taxes
  })
};
const taxId = (state, action) => {
  return updateObject(state, {
    error: null,
    tax: action.tax
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TAX:
      return fetchTaxes(state, action);
    case actionTypes.FETCH_TAX_FAIL:
      return fail(state, action);
    case actionTypes.TAX_ID:
      return taxId(state, action);
    case actionTypes.TAX_ID_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;