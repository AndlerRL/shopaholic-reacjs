import React from 'react';

import Btn from '../UI/Btn/Btn';
import BtnIcon from '../UI/Btn/BtnIcon';

import css from './ShoppingCart.css';

const shoppingCart = props => {
  const cartProducts = props.shoppingCart.map(cart => (
    <tr className={css.Item}
      key={cart.item_id}>
      <td className={css.MainInfo}>
        <div>
          <img src={`https://backendapi.turing.com/images/products/${cart.image}`} alt={cart.image} />
        </div>
        <div>
          <p>name { cart.name }</p>
          <p>item #{ cart.item_id }</p>
          <BtnIcon
            btnType={null}
            icon="times"
            iconType="fas"
            iconSize="1rem">
            Remove
          </BtnIcon>
        </div>
      </td>
      <td>
        <p>{cart.attributes} </p>
      </td>
      <td>
        <p>{ cart.quantity }</p>
      </td>
      <td>
        <p>USD ${ cart.price }</p>
      </td>
    </tr>
  ));

  return (
    <div className={css.ShoppingCart}>
      <h5>{props.shoppingCart.length} items in your cart!</h5>
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
          { cartProducts }
        </tbody>
        <tfoot>
          <td>
            Total Amount: USD ${ props.totalAmount }
          </td>
        </tfoot>
      </table>

      <div className={css.Actions}>
        <Btn 
          btnType="contained"
          btnColor="secondary"
          clicked={props.backShop}>
          back to shop
        </Btn>
        <Btn 
          btnType="contained"
          btnColor="primary"
          clicked={props.backShop}>
          checkout
        </Btn>
      </div>
    </div>
  )
};

export default shoppingCart;