import { connect } from 'react-redux';
import React from 'react';
import { injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';

import Btn from '../../UI/Btn/Btn';
import { Loading } from '../../UI/Loading/Loading';

import css from './Payout.css';

const payout = props => {
  const payoutHandler = async e => {
    let token = await props.stripe.createToken({
      name: props.userData.name
    });

    /**
     * DON'T SAVE OR RELOAD!
     * I GOT IT SOLVED. NOW THAT I GOT THE INFO,
     * I JUST NEED THE FOLLOWING:
     * ORDER_ID FROM CONTAINER AS PROPS
     * ANY DESCRIPTION, STRIPE API TELLS WHAT IT IS
     * AMOUNT IT'S AN INTEGER, FROM THE ORDER OF COURSE (AS A PROPS TOO)
     * CURRENCY USD, DUH
     * TOKEN IT GENERATES ALONE.
     */
    console.log(token);
  }

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

  console.log(props);

  const dateStr = Date.parse(props.order.created_on);
  const dateNum = new Date(dateStr);
  const getMonth = month[dateNum.getMonth()];
  const parseDate = `${getMonth}, ${dateNum.getDate()} ${dateNum.getFullYear()} at ${dateNum.getHours()}:${dateNum.getMinutes()}hrs`;

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
        <Btn
          btnType="contained"
          btnColor="primary"
          size="large"
          clicked={payoutHandler}>
          Continue
        </Btn>
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
    error: state.orders.error,
    userData: state.auth.userData
  }
}

export default connect(mapStateToProps)(injectStripe(React.memo(payout)));