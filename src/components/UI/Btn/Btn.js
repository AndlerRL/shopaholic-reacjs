import React from 'react';

import css from './Btn.css';

const btn = props => (
  <div className={['waves-effect waves-light btn', css.Btn].join(' ')}>
    {props.children}
  </div>
);

export default btn