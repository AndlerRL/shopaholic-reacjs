import { connect } from 'react-redux';
import React from 'react';

import { Loading } from '../UI/Loading/Loading';
import Btn from '../UI/Btn/Btn';

import css from './Orders.css';

const orders = props => {
  let snackbar = null;
  let orderDetail = null;

  if (props.isLoading)
    orderDetail = <Loading />

  if (props.onDetails)
    orderDetail = props.orderDetail.map(detail => {
      return (
        <div 
          key={detail.order_id}
          className={css.OrderDetail}>
          <table>
            <thead>
              <tr>
                <th>Product ID#</th>
                <th>Product Name</th>
                <th>Attributes</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detail.product_id}</td>
                <td>{detail.product_name}</td>
                <td>{detail.attributes}</td>
                <td>{detail.quantity}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Unit cost : USD ${ detail.unit_cost }</td>
                <td>Subtotal : USD ${ detail.subtotal }</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )
    });

  let orders = props.orders.map(order => {
    let month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    const dateStr = Date.parse(order.created_on);
    const dateNum = new Date(dateStr);
    const getMonth = month[dateNum.getMonth()];
    const parseDate = `${getMonth}, ${dateNum.getDate()} ${dateNum.getFullYear()} at ${dateNum.getHours()}:${dateNum.getMinutes()}hrs`
    return (
      <div 
        key={order.order_id}
        className={css.Order}>
        <div>
          <span>
            ID# { order.order_id }
          </span>
          <span>
            Ordered by { order.name }
          </span>
        </div>
        <div>
          <div>
            <p>
              Shipped on: 
              <span style={{
                color: order.shipped_on ? '#64b5f6' : '#ff1744'
              }}>{' '}
                { order.shipped_on ? 'Arriving depending status' : 'Not delivered yet' }
              </span>
            </p>
            <p>
              Order Status: { order.status }
            </p>
          </div>
          <div>
            <Btn
              btnType="contained"
              btnColor="primary"
              size="small"
              clicked={props.payPurchase(order.order_id)}>
              Continue to pay
            </Btn>
            <Btn
              btnType="contained"
              btnColor="secondary"
              size="small"
              clicked={props.orderDetails(order.order_id)}>
              <span style={{
                color: props.onDetail && order.order_id === props.orderId ? '#64b5f6 !important' : '#222'
              }}>
                { props.onDetail ? 'Hide Details' : 'Order Details' }
              </span>
            </Btn>
          </div>
        </div>
        <div style={{
          borderBottom: props.onDetails && order.order_id === props.orderId ? '1px solid #2223' : '1px solid transparent',
          marginBottom: props.onDetails && order.order_id === props.orderId ? 32 : 0,
          paddingBottom: props.onDetails && order.order_id === props.orderId ? 32 : 0
        }}>
          <span>Total Order Amount ${ order.total_amount }</span>
          <span>Created on { parseDate } </span>
        </div>
        <div style={{
          flexDirection: 'column',
          width: '100%'
        }}>
          { order.order_id === props.orderId ?
            orderDetail :
            null
          }
        </div>
      </div>
    )
  });
    
  if (props.isLoading && props.orders.length === 0)
    orders = <Loading />

  return (
    <div className={css.Orders}>
      { orders }
      { snackbar }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.orders.isLoading,
    onDetails: state.orders.onDetail
  }
}

export default connect(mapStateToProps)(orders);