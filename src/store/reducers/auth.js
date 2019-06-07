import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  token: null,
  error: null,
  isLoading: false,
  isSignIn: false,
  isSignUp: false,
  sideDrawer: false,
  userData: [],
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
const handleSideDrawer = (state, action) => {
  return updateObject(state, {
    sideDrawer: !state.sideDrawer
  })
}
const authRegisterSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userData: action.userData,
    error: null,
    isLoading: false,
    isSignUp: false,
  })
}
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userData: action.userData,
    error: null,
    isLoading: false,
    isSignIn: false
  })
}
const authFbSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    idToken: action.token,
    userData: action.userData
  })
}
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userData: null,
  })
}
const setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path
  })
}
const userUpdateSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    userData: action.userData
  })
}
const addressSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    userData: action.userData
  })
}
const ccSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: null,
    userData: action.userData
  })
}
const goToSignIn = (state, action) => {
  return updateObject(state, {
    isSignIn: !state.isSignIn
  })
}
const goToSignUp = (state, action) => {
  return updateObject(state, {
    isSignUp: !state.isSignUp
  })
}
const confirmAuthError = (state, action) => {
  return updateObject(state, {
    error: null
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_SIDEDRAWER:
      return handleSideDrawer(state, action);
    case actionTypes.AUTH_START:
      return start(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return fail(state, action);
    case actionTypes.AUTH_USER_FB_START:
      return start(state, action);
    case actionTypes.AUTH_USER_FB_SUCCESS:
      return authFbSuccess(state, action);
    case actionTypes.AUTH_USER_FB_FAIL:
      return fail(state, action);
    case actionTypes.AUTH_REGISTER_START:
      return start(state, action);
    case actionTypes.AUTH_REGISTER_SUCCESS:
      return authRegisterSuccess(state, action);
    case actionTypes.AUTH_REGISTER_FAIL:
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
    case actionTypes.AUTH_USER_UPDATE_START:
      return start(state, action);
    case actionTypes.AUTH_USER_UPDATE_SUCCESS:
      return userUpdateSuccess(state, action);
    case actionTypes.AUTH_USER_UPDATE_FAIL:
      return fail(state, action);
    case actionTypes.GO_TO_SIGN_IN:
      return goToSignIn(state, action);
    case actionTypes.GO_TO_SIGN_UP:
      return goToSignUp(state, action);
    case actionTypes.AUTH_CONFIRM_ERROR:
      return confirmAuthError(state, action);
    default:
      return state;
  }
}

export default reducer;

