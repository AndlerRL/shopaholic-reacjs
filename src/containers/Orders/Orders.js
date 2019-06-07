import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

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
    const queryString = `${encodeURIComponent('id')}=${encodeURIComponent(order_id)}`;

    props.onOrderShortDetail(order_id);
    props.history.push({
      pathname: props.match.path + '/checkout',
      search: '?' + queryString 
    });
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrdersInCustomer: () => dispatch(actions.fetchOrdersInCustomer()),
    onOrderDetail: orderId => dispatch(actions.orderId(orderId)),
    onOrderShortDetail: orderId => dispatch(actions.orderShortDetail(orderId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));