import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};
export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
}
export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}
export const logout = () => {
  return {
    type: actionTypes.AUTH_INIT_LOGOUT
  }
}
export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
export const checkAuthTimeout = expTime => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expTime: expTime
  }
}
export const auth = (name, email, password, isSignup) => {
  return {
    type: actionTypes.AUTH_USER,
    name: name,
    email: email,
    password: password,
    isSignup: isSignup
  }
}
export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}
export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE
  }
}
export const addressStart = () => {
  return {
    type: actionTypes.AUTH_USER_ADDRESS_START,
  }
}
export const addressSuccess = userData => {
  return {
    type: actionTypes.AUTH_USER_ADDRESS_SUCCESS,
    userData: userData
  }
}
export const addressFail = error => {
  return {
    type: actionTypes.AUTH_USER_ADDRESS_FAIL,
    error: error
  }
}
export const ccStart = () => {
  return {
    type: actionTypes.AUTH_USER_CREDIT_CARD_START
  }
}
export const ccSuccess = cc => {
  return {
    type: actionTypes.AUTH_USER_ADDRESS_SUCCESS,
    cc: cc
  }
}
export const ccFail = error => {
  return {
    type: actionTypes.AUTH_USER_CREDIT_CARD_FAIL,
    error: error
  }
}
export const authFbStart = () => {
  return {
    type: actionTypes.AUTH_USER_FB_START
  }
}
export const authFbSuccess = fbToken => {
  return {
    type: actionTypes.AUTH_USER_FB_SUCCESS,
    fbToken: fbToken
  }
}
export const authFbFail = error => {
  return {
    type: actionTypes.AUTH_USER_FB_FAIL,
    error: error
  }
}
export const goToSignIn = () => {
  return {
    type: actionTypes.GO_TO_SIGN_IN
  }
}
export const goToSignUp = () => {
  return {
    type: actionTypes.GO_TO_SIGN_UP
  }
}