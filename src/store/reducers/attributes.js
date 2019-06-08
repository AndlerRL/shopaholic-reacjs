import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  size: null,
  color: null,
  sizeVals: [],
  colorVals: [],
  sizeId: null,
  colorId: null,
  productId: null,
  productAttributes: []
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
    size: action.size,
    color: action.color
  })
};
const attributeIdSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    sizeId: action.sizeId,
    colorId: action.colorId
  })
};
const attributeValuesSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    sizeVals: action.sizeVal,
    colorVals: action.colorVal
  })
}
const attributeInProductSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    productId: action.productId,
    productAttributes: action.productAttributes
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ATTRIBUTES_START:
      return start(state, action);
    case actionTypes.FETCH_ATTRIBUTES_SUCCESS:
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