import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import * as actions from '../../store/actions';
import OrdersSummary from '../../components/Orders/Orders';

const Orders = props => {
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    props.onOrdersInCustomer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderDetailsHandler = order_id => () => {
    setOrderId(order_id);

    props.onOrderDetail(order_id);
  }

  const payPurchaseHandler  = order_id => () => {
    console.log(order_id)
  }

  const orders = props.orders.map(order => order);
  const order = props.order.map(detail => detail);

  return (
    <OrdersSummary 
      orders={orders}
      orderDetails={orderDetailsHandler}
      payPurchase={payPurchaseHandler}
      orderDetail={order}
      orderId={orderId} />
  )
};

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    order: state.orders.order,
    // STATE BELLOW GOES WHEN IT IS NECESSARY TO PAYOUT ORDER 
    // orderDetail: state.orders.orderDetail,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrdersInCustomer: () => dispatch(actions.fetchOrdersInCustomer()),
    // ACTION BELLOW GOES WHEN IT IS NECCESSARY TO PAYOUT ORDER
    // onOrderShortDetail: orderId => dispatch(actions.orderShortDetail(orderId)),
    onOrderDetail: orderId => dispatch(actions.orderId(orderId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);