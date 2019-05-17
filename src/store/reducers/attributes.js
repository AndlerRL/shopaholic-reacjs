import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  attribute: [],
  valueId: [],
  products: []
}

const start = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    error: null
  })
};
const fail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: action.error
  })
};
const attributeSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    attribute: {
      attributeId: action.attrId,
      name: action.name
    }
  })
};
const attributeIdSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    attributeId: action.attrId
  })
};
const attributeValuesSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    valueId: action.valueId
  })
}
const attributeInProductSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    products: action.productId
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ATTRIBUTES:
      return attributeSuccess(state, action);
    case actionTypes.FETCH_ATTRIBUTES_FAIL:
      return fail(state, action);
    case actionTypes.FETCH_ATTRIBUTES_ID:
      return attributeIdSuccess(state, action);
    case actionTypes.FETCH_ATTRIBUTES_ID_FAIL:
      return fail(state, action);
    case actionTypes.ATTRIBUTES_IN_PRODUCT_START:
      return start(state, action);
    case actionTypes.ATTRIBUTES_IN_PRODUCT_SUCCESS:
      return attributeInProductSuccess(state, action);
    case actionTypes.ATTRIBUTES_IN_PRODUCT_FAIL:
      return fail(state, action);
    case actionTypes.ATTRIBUTES_VALUES_ID_START:
      return start(state, action);
    case actionTypes.ATTRIBUTES_VALUES_ID_SUCCESS:
      return attributeValuesSuccess(state, action);
    case actionTypes.ATTRIBUTES_VALUES_ID_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;