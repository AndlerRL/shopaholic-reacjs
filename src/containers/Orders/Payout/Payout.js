/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import React, { useEffect, useState } from 'react';

import * as actions from '../../../store/actions';
import Axios from '../../../axios-shop';
import Checkout from '../../../components/Orders/Payout/Payout';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

const Payout = props => {
  const [order_id, setOrder_id] = useState(0);
  const [orderDetail, setOrderDetail] = useState([])

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    let orderId = 0;

    for (let param of query.entries()) {
      if (param[0] === 'id')
        orderId = param[1];
    }

    setOrder_id(orderId);

    if (props.orderDetail)
      setOrderDetail(props.orderDetail);
  }, [props]);

  const payoutHandler = async e => {
    e.preventDefault();

    const response = await props.stripe.createToken({
      name: props.userData.name,
      address_line1: props.userData.address_1,
      address_line2: props.userData.address_2,
      address_city: props.userData.city,
      address_country: props.userData.country,
      address_zip: props.userData.postal_code
    });

    const updateCC = {
      credit_card: response.token.card.last4
    };
 
    const orderChargeData = {
      stripeToken: response.token.id,
      order_id: parseInt(order_id),
      description: `SHOPAHOLIC–ORDER#${order_id}`,
      amount: parseFloat(orderDetail.total_amount),
      currency: 'usd'
    }

    console.log(response);
    props.onUpdateCC(updateCC);
    props.onStripeCharge(orderChargeData);
  }

  return ( 
    <Checkout 
      order={orderDetail}
      payout={payoutHandler}>
      <div>
        <label> Credit or Debit card </label>
        <CardNumberElement />
      </div>
      <div>
        <div>
          <label> Expiration Date </label>
          <CardExpiryElement />
        </div>
        <div>
          <label> CVC code </label>
          <CardCVCElement />
        </div>
      </div>
    </Checkout>
  )
};

const mapStateToProps = state => {
  return {
    orderDetail: state.orders.orderDetail,
    userData: state.auth.userData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderShortDetail: orderId => dispatch(actions.orderShortDetail(orderId)),
    onStripeCharge: orderChargeData => dispatch(actions.stripeCharge(orderChargeData)),
    onUpdateCC: cc => dispatch(actions.updateCC(cc))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(withErrorHandler(Payout, Axios)));
