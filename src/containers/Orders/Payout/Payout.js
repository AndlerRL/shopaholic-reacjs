import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { injectStripe, Elements, StripeProvider } from 'react-stripe-elements';

import * as actions from '../../../store/actions';
import Checkout from '../../../components/Orders/Payout/Payout';

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
      setOrderDetail(props.orderDetail)
  }, [props]);

  const payOrderHandler = e => {
    e.preventDefault();

    console.log(order_id);
  }

  return (
    <StripeProvider apiKey="pk_test_Bd80bCRHqVOuOLdkyClLhgRV00nXWw0eC2">
      <Elements>
        <Checkout 
          order={orderDetail}
          payOrder={payOrderHandler} />
      </Elements>
    </StripeProvider>
  )
};

const mapStateToProps = state => {
  return {
    orderDetail: state.orders.orderDetail,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderShortDetail: orderId => dispatch(actions.orderShortDetail(orderId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Payout);
