import React from 'react';

import IconM from '../Icons/IconM';

import css from './ShoppingCar.css';

const shoppingCar = props => (
  <div className={css.ShoppingCar} onClick={props.clicked}>
    <div className={css.Icon}>
      <IconM 
        color="action"
        icon="shopping_basket"
        size="default" />
      <span className={css.Items}>
        99
      </span>
    </div>
    <p>
      Your bag: <span>$999.99</span>
    </p>
  </div>
);

export default shoppingCar;