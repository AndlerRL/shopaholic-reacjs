import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  token: null,
  userId: null,
  error: null,
  isLoading: false,
  authRedirectPath: '/'
};

const start = (state, action) => {
  return updateObject(state, {
    error: null,
    isLoading: true
  })
}
const fail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isLoading: false
  })
}
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    isLoading: false
  })
}
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null
  })
}
const setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path
  })
}
const addressSuccess = (state, action) => {
  return updateObject(state, {
    address1: action.address1,
    address2: action.address2,
    city: action.city,
    zipCode: action.zipCode,
    region: action.region,
    country: action.country,
    shippingRegionId: action.shippingRegionId,
    isLoading: false,
    error: null
  })
}
const ccSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    cc: action.cc
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return start(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return fail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.AUTH_USER_ADDRESS_START:
      return start(state, action);
    case actionTypes.AUTH_USER_ADDRESS_SUCCESS:
      return addressSuccess(state, action);
    case actionTypes.AUTH_USER_ADDRESS_FAIL:
      return fail(state, action);
    case actionTypes.AUTH_USER_CREDIT_CARD_START:
      return start(state, action);
    case actionTypes.AUTH_USER_CREDIT_CARD_SUCCESS:
      return ccSuccess(state, action);
    case actionTypes.AUTH_USER_CREDIT_CARD_FAIL:
      return fail(state, action);
    default:
      return state;
  }
}

export default reducer;

