import React from 'react';

import IconM from '../Icons/IconM';

import css from './ShoppingCar.css';

const shoppingCar = props => (
  <div className={css.ShoppingCar} onClick={props.clicked}>
    <div className={css.Icon}>
      <IconM 
        color="action"
        icon="shopping_basket"
        size={window.outerWidth > 750 ? "small" : "default"} />
      <span className={css.Items}>
        {props.itemsCar}
      </span>
    </div>
    <p>
      Your bag: <span>${props.totalBag}</span>
    </p>
  </div>
);

export default shoppingCar;