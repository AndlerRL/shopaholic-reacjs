import reducer from './stripe';
import * as actionTypes from '../actions/actionTypes';

describe('Stripe Reducer', () => {
  it('should do and store the charge upon payout', () => {
    expect(reducer({
      isLoading: null,
      error: null,
      chargeOrder: {},
      received: null,
    },{
      type: actionTypes.STRIPE_CHARGE_SUCCESS,
      chargeOrder:{
        some: 'info'
      }
    })).toEqual({
      isLoading: null,
      error: null,
      chargeOrder: {
        some: 'info'
      },
      received: null,
    })
  })

  it('should connect with webhooks upon charge and sync', () => {
    expect(reducer({
      isLoading: null,
      error: null,
      chargeOrder: {
        some: 'info'
      },
      received: null,
    },{
      type: actionTypes.STRIPE_WEBHOOKS_SUCCESS,
      received: true
    })).toEqual({
      isLoading: null,
      error: null,
      chargeOrder: {
        some: 'info'
      },
      received: true,
    })
  })
})