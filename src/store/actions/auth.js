import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};
export const authSuccess = (token, userData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userData: userData
  }
}
export const authRegisterStart = () => {
  return {
    type: actionTypes.AUTH_REGISTER_START
  }
};
export const authRegisterSuccess = (token, userData) => {
  return {
    type: actionTypes.AUTH_REGISTER_SUCCESS,
    idToken: token,
    userData: userData
  }
}
export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}
export const authRegisterFail = error => {
  return {
    type: actionTypes.AUTH_REGISTER_FAIL,
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
export const auth = (email, password) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password
  }
}
export const authFb = accessToken => {
  return {
    type: actionTypes.AUTH_USER_FB,
    accessToken: accessToken
  }
}
export const authFbStart = () => {
  return {
    type: actionTypes.AUTH_USER_FB_START
  }
} 
export const authFbSuccess = (token, userData) => {
  return {
    type: actionTypes.AUTH_USER_FB_SUCCESS,
    idToken: token,
    userData: userData
  }
}
export const authFbFail = error => {
  return {
    type: actionTypes.AUTH_USER_FB_FAIL,
    error: error
  }
}
export const authRegister = (name, email, password) => {
  return {
    type: actionTypes.AUTH_REGISTER_USER,
    name: name,
    email: email,
    password: password,
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
export const updateUser = userData => {
  return {
    type: actionTypes.UPDATE_USER,
    updateCustomer: userData
  }
}
export const updateCustomerStart = () => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_START,
  }
}
export const updateCustomerSuccess = userData => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_SUCCESS,
    userData: userData
  }
}
export const updateCustomerFail = error => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_FAIL,
    error: error
  }
}
export const updateAddress = customerAddress => {
  return {
    type: actionTypes.UPDATE_USER_ADDRESS,
    customerAddress: customerAddress
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
export const updateCC = userData => {
  return {
    type: actionTypes.AUTH_USER_CREDIT_CARD,
    cc: userData
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
    userData: cc
  }
}
export const ccFail = error => {
  return {
    type: actionTypes.AUTH_USER_CREDIT_CARD_FAIL,
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
export const handleSideDrawer = () => {
  return {
    type: actionTypes.HANDLE_SIDEDRAWER
  }
}
export const confirmAuthError = () => {
  return {
    type: actionTypes.AUTH_CONFIRM_ERROR
  }
}