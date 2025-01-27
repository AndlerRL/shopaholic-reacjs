import React from 'react';

import IconF from '../Icons/IconF';

import css from './Currency.css';

const currency = props => (
  <div className={css.Currency} onClick={props.clicked}>
    <IconF
      color="#4fc3f7"
      size="1rem"
      type="fas"
      icon="flag-usa" />
    <p>
      $ {props.currency}
    </p>
  </div>
);

export default currency;