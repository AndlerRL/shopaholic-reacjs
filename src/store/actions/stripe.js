import * as actionTypes from './actionTypes';

export const stripeChargeStart = () => {
  return {
    type: actionTypes.STRIPE_CHARGE_START
  }
}
export const stripeChargeSuccess = (stripeToken, orderId, description, amount, currency) => {
  return {
    type: actionTypes.STRIPE_CHARGE_SUCCESS,
    stripeToken: stripeToken,
    orderId: orderId,
    description: description,
    amount: amount,
    currency: currency
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
export const stripeWebhooksSuccess = () => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_SUCCESS,
  }
}
export const stripeWebhooksFail = error => {
  return {
    type: actionTypes.STRIPE_WEBHOOKS_FAIL,
    error: error
  }
}