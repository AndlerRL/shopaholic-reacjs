import { connect } from 'react-redux';
import React from 'react';

import Btn from '../../UI/Btn/Btn';
import { Loading, LoadingImg } from '../../UI/Loading/Loading';

import css from './Payout.css';

const payout = props => {
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

  const dateStr = Date.parse(props.order.created_on);
  const dateNum = new Date(dateStr);
  const getMonth = month[dateNum.getMonth()];
  const parseDate = `${getMonth}, ${dateNum.getDate()} ${dateNum.getFullYear()} at ${dateNum.getHours()}:${dateNum.getMinutes()}hrs`;

  let btn = (
    <Btn
      btnType="contained"
      btnColor="primary"
      size="large"
      clicked={props.payout}>
      Continue
    </Btn>
  )

  if (props.isLoadingStripe)
    btn = <LoadingImg style={{
      top: '2rem',
      width: 80,
      margin: '0 275px',
    }} />

  return (
    <div className={css.Payout}>
      <h3>What we will ship to you:</h3>
      { 
        props.isLoading ? 
          <Loading /> : 
          <div 
            key={props.order.order_id}
            className={css.OrderSummary}>
            <div>
              <span>
                ID# { props.order.order_id }
              </span>
              <span>
                Ordered by { props.order.name }
              </span>
            </div>
            <div>
              <div>
                <p>
                  Shipped on: 
                  <span style={{
                    color: props.order.shipped_on ? '#64b5f6' : '#ff1744'
                  }}>{' '}
                    { props.order.shipped_on ? 'Arriving depending status' : 'Not delivered yet' }
                  </span>
                </p>
                <p>
                  Order Status: { props.order.status }
                </p>
              </div>
            </div>
            <div>
              <span>Total Order Amount ${ props.order.total_amount }</span>
              <span>Created on { parseDate } </span>
            </div>
          </div>
        }
      <h5>Please, provide next information to continue.</h5>
      <div className={css.CCInfo}>
        { props.children }
        { btn }
      </div>
      <div className={css.Hint}>
        <span>*Hint:</span>
        <p>All information is for test only, so DON'T put real information, instead do:</p>
        <ul>
          <li>Credit/Debit card number must be only <b>4242 4242 4242 4242</b>.</li>
          <li>Exp. Date should be a <b>date after the recent one</b>.</li>
          <li>CVC can be a <b>random 3 digit number</b>.</li>
        </ul>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.orders.isLoading,
    isLoadingStripe: state.stripe.isLoading,
  }
}

export default connect(mapStateToProps)(React.memo(payout));