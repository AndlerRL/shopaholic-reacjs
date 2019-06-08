import * as actionTypes from './actionTypes';

export const stripeCharge = chargeOrder => {
  return {
    type: actionTypes.STRIPE_CHARGE_INIT,
    chargeOrder: chargeOrder
  }
}
export const stripeChargeStart = () => {
  return {
    type: actionTypes.STRIPE_CHARGE_START
  }
}
export const stripeChargeSuccess = chargeOrder => {
  return {
    type: actionTypes.STRIPE_CHARGE_SUCCESS,
    chargeOrder: chargeOrder
  }
}
export const stripeChargeFail = error => {
  return {
    type: actionTypes.STRIPE_CHARGE_FAIL,
    error: error
  }
}
export const stripeWebhooksStart = () => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_START
  }
}
export const stripeWebhooks = () => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_INIT,
  }
} 
export const stripeWebhooksSuccess = received => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_SUCCESS,
    received: received
  }
}
export const stripeWebhooksFail = error => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_FAIL,
    error: error
  }
}