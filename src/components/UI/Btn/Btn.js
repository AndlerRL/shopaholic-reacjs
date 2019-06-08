import React from 'react';

import Button from '@material-ui/core/Button';

import css from './Btn.css';

const btn = props => (
  <Button
    type={props.submit ? "submit" : null}
    variant={props.btnType}
    size={props.size}
    onClick={props.clicked}
    disabled={props.disabled}
    value={props.value}
    className={[
      css.Btn, 
      props.btnColor === 'primary' ? css.Primary : null,
      props.btnColor === 'secondary' ? css.Secondary : null,
      props.btnColor === 'pagination' ? css.Pagination : null].join(' ')}>
    {props.children}
  </Button>
);

export default btn;