import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  chargeOrder: {},
  received: null,
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
const postCharge = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    chargeOrder: action.chargeOrder
  })
};
const webhooks = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    received: action.received
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STRIPE_CHARGE_START:
      return start(state, action);
    case actionTypes.STRIPE_CHARGE_SUCCESS:
      return postCharge(state, action);
    case actionTypes.STRIPE_CHARGE_FAIL:
      return fail(state, action);
    case actionTypes.STRIPE_WEBHOOKS_START:
      return start(state, action);
    case actionTypes.STRIPE_WEBHOOKS_SUCCESS:
      return webhooks(state, action);
    case actionTypes.STRIPE_WEBHOOKS_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;