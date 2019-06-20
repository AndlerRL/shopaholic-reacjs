import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';
//import stripe from 'stripe';

import * as actions from '../actions';

export function* stripeChargeSaga(action) {
  yield put(actions.stripeChargeStart());
  
  try {
    const response = yield Axios.post('stripe/charge', action.chargeOrder);
    let { status } = null;//yield stripe.charges.create(action.chargeOrder);
    //res.json({ status });
    //console.log('STRIPE CHARGE ORDER SAGA RES: ', response);
    console.log({ status });
    yield put(actions.stripeChargeSuccess({ status }))
    yield put (actions.stripeWebhooks())
  } catch(error) {
    //res.status(500).end();
    console.error(error);
    yield put(actions.stripeChargeFail(error));
  }
}

export function* stripeWebhooksSaga(action) {
  yield put(actions.stripeWebhooksStart());

  const app = require('express');
  const stripe = window.Stripe(process.env.API_KEY);
  const endpointSecret = process.env.ENDPOINT_SECRET;

  yield app.use(require('body-parser').raw({ type: '*/*' }));
  yield app.post(Axios.defaults.baseURL + '/stripe/webhooks', (res, req) => {
    let sig = req.header['stripe-signature'];

    try {
      let event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

      //console.log(JSON.stringify(event));
      // put(actions.stripeWebhooksSuccess(event)
    } catch(error) {
      res.status(400).end()
      console.error(error);
    }

    res.json({ received: true });
  });

  const endpoint = stripe.webhookEndpoints.crete({
    url: Axios.defaults.baseURL + '/stripe/webhooks',
    enabled_events: ["charge.failed", "charge.succeeded"]
  }, (error, webhookEndpoint) => {
    //console.log(webhookEndpoint);
    console.error(error)
  })

  //console.log(endpoint);
} 