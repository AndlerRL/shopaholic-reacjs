import React from 'react';

import BtnIcon from '../UI/Btn/BtnIcon';

import css from './CheckoutSummary.css';

const checkoutSummary = props => (
  <div className={css.CheckoutSummary}>
    <h2>We know that you pick the right shirt!</h2>
    <div className={css.CheckoutOrder}>
      <h4>Table of the current order goes here</h4>
    </div>
    <div className={css.CheckoutBtns}>
      <BtnIcon>Cancel</BtnIcon>
      <BtnIcon>Continue</BtnIcon>
    </div>
  </div>
);

export default checkoutSummary;