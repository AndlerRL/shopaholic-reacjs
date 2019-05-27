import React from 'react';

import IconM from '../Icons/IconM';

import css from './ShoppingCart.css';

const shoppingCart = props => (
  <div className={css.ShoppingCart} onClick={props.clicked}>
    <div className={css.Icon}>
      <IconM 
        color="action"
        icon="shopping_basket"
        size={window.outerWidth > 750 ? "small" : "default"} />
      { props.itemsCart >= 1 ? (
        <span className={css.Items}>
          {props.itemsCart}
        </span> ) : null }
    </div>
    <p>
      Your bag: <span>${props.totalBag}</span>
    </p>
  </div>
);

export default shoppingCart;