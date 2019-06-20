/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import React, { useEffect, useState } from 'react';

import * as actions from '../../../store/actions';
import Axios from '../../../axios-shop';
import Checkout from '../../../components/Orders/Payout/Payout';
import ModalHover from '../../../components/UI/Modal/ModalHover/ModalHover';
import IconF from '../../../components/UI/Icons/IconF';
import Btn from '../../../components/UI/Btn/Btn';
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

    const { token } = await props.stripe.createToken({
      name: props.userData.name,
      address_line1: props.userData.address_1,
      address_line2: props.userData.address_2,
      address_city: props.userData.city,
      address_country: props.userData.country,
      address_zip: props.userData.postal_code
    });

    const updateCC = {
      credit_card : token.card.last4
    }

    const amount = Math.trunc(orderDetail.total_amount);
 
    const orderChargeData = {
      stripeToken: 'tok_visa',
      order_id: parseInt(order_id),
      description: `SHOPAHOLIC–ORDER#${order_id}`,
      amount: amount * 100 + ((orderDetail.total_amount - amount) * 100),
      currency: 'usd'
    }
    //console.log('Order Charge Data\n', orderChargeData);
    
    props.onUpdateCC(updateCC);
    props.onStripeCharge(orderChargeData);
  }

  /* console.log('PROPS.CHARGE_ORDER STATE FROM REDUX: \n', props.chargeOrder);
  console.log('PROPS.RECEIVED STATE FROM REDUX: \n', props.received); */

  const confirmReceivedHandler = () => {
    props.onConfirmReceived();

    props.history.replace('/orders');
  }

  return ( 
    <React.Fragment>
      { props.received ? <ModalHover 
        modalClosed={confirmReceivedHandler}
        show={props.received}>
        <h3>{props.chargeOrder.outcome.seller_message}</h3>
        <h5>Order Status: <span>"{props.chargeOrder.outcome.network_status}"</span></h5>
        <h5>ID #{props.chargeOrder.metadata.order_id}</h5>
        <h4>
          <a href={props.chargeOrder.receipt_url} target="__blank">
            Your Receipt
            <IconF 
              type="fas"
              icon="external-link-alt"
              size="1rem"
              color="inherit" />
          </a>
        </h4>
        <Btn 
          btnType="contained"
          btnColor="primary"
          clicked={confirmReceivedHandler}>
          Confirm
        </Btn>
      </ModalHover> : null }
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
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    orderDetail: state.orders.orderDetail,
    userData: state.auth.userData,
    chargeOrder: state.stripe.chargeOrder,
    received: state.stripe.received
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderShortDetail: orderId => dispatch(actions.orderShortDetail(orderId)),
    onStripeCharge: orderChargeData => dispatch(actions.stripeCharge(orderChargeData)),
    onUpdateCC: cc => dispatch(actions.updateCC(cc)),
    onConfirmReceived: () => dispatch(actions.confirmReceived()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(withErrorHandler(Payout, Axios)));
