import React from 'react';

import BtnIcon from '../UI/Btn/BtnIcon';
import { LoadingImg } from '../UI/Loading/Loading';

import css from './CheckoutSummary.css';

const checkoutSummary = props => {
  const itemsToCheck = props.order.map(order => (
    <tr className={css.Item}
      style={{
        opacity: props.remove ? 0 : 1
      }}
      key={order.item_id}>
      <td>
        <div>
          { props.isLoading ? 
            <LoadingImg /> :
            <img src={`https://backendapi.turing.com/images/products/${order.image}`} alt={order.image} /> 
          }
        </div>
        <div>
          <p>T-Shirt { order.name }</p>
          <p>Item #{ order.item_id }</p>
        </div>
      </td>
      <td>
        <p>{order.attributes} </p>
      </td>
      <td>
        <p>
          { order.quantity }
        </p>
      </td>
      <td>
        <p>${ order.price }</p>
      </td>
    </tr>
  ))
  
  return (
    <div className={css.CheckoutSummary}>
      <h2>We know that you picked the right shirt!</h2>
      <div className={css.CheckoutOrder}>
        <table>
          <thead>
            <tr>
              <th> Item </th>
              <th> Color & Size </th>
              <th> Quantity </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            { itemsToCheck }
          </tbody>
        </table>
      </div>
      <div className={css.CheckoutBtns}>
        <BtnIcon
          iconType="fas"
          icon="times"
          iconColor="#ff1744"
          btnType="contained"
          btnColor="secondary"
          clicked={props.cancelOrder}>
          Cancel
        </BtnIcon>
        <BtnIcon
          iconType="fas"
          icon="check"
          iconColor="#689f38"
          btnType="contained"
          btnColor="primary"
          clicked={props.purchaseOrder}>
          Continue
        </BtnIcon>
      </div>
    </div>
  )
};

export default checkoutSummary;