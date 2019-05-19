import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';
/***
 * NEED WORK ON STRIPE, 
 * SO I CAN COMBINE EXPRESS,
 * BODY-PARSER AND 
 * REDUX/REDUX THUNK 
 * AND SAGAS
 ***/

const initState = {
  isLoading: null,
  error: null,
  stripeToken: null,
  orderId: null,
  description: null,
  amount: null,
  currency: null
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
    stripeToken: action.stripeToken,
    orderId: action.orderId,
    description: action.description,
    amount: action.amount,
    currency: action.currency
  })
};
const webhooks = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null
  })
}

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