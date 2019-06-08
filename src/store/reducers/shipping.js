import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  regions: [],
  shippingOpt: []
}

const start = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    error: null
  })
};
const fail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: action.error
  })
};
const fetchRegions = (state, action) => {
  return updateObject(state, {
    regions: action.regions
  })
};
const fetchRegionId = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    shippingOpt: action.shippingOpt
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHIPPING:
      return fetchRegions(state, action);
    case actionTypes.FETCH_SHIPPING_FAIL:
      return fail(state, action);
    case actionTypes.SHIPPING_ID_START:
      return start(state, action);
    case actionTypes.SHIPPING_ID_SUCCESS:
      return fetchRegionId(state, action);
    case actionTypes.SHIPPING_ID_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;