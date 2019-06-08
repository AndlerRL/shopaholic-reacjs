import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth Reducer', () => {
  it('should return the initState', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      isLoading: false,
      isSignIn: false,
      isSignUp: false,
      sideDrawer: false,
      userData: [],
      authRedirectPath: "/"
    })
  })

  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      error: null,
      isLoading: false,
      isSignIn: false,
      isSignUp: false,
      sideDrawer: false,
      userData: [],
      authRedirectPath: "/"
    },{
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token'
    },{
      type: actionTypes.AUTH_USER_FB_SUCCESS,
      idToken: 'some-token'
    })).toEqual({
      token: 'some-token',
      error: null,
      isLoading: false,
      authRedirectPath: "/",
      isSignIn: false,
      isSignUp: false,
      sideDrawer: false,
    })
  })
})