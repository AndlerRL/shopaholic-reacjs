import React from 'react';

import IconF from '../Icons/IconF';

import css from './Currency.css';

const currency = props => (
  <div className={css.Currency} onClick={props.clicked}>
    <IconF
      color="#4fc3f7"
      size="1.5rem"
      type="fas"
      icon="flag-usa" />
    <p>
      $ USD
    </p>
  </div>
);

export default currency;