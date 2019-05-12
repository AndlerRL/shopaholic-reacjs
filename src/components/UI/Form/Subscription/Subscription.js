import React from 'react';

import Input from '../Input/Input';

import css from './Subscription.css';

const subscription = props => (
  <Input 
    type="email"
    placeholder="Your e-mail here"
    cssName={css.Subscription}
    iconSearch="mail_outline"
    clicked={props.clicked} />
);

export default subscription;