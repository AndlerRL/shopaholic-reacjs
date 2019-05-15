import React from 'react';

import Button from '@material-ui/core/Button';

import css from './Btn.css';

const btn = props => (
  <Button
    variant={props.btnType}
    size={props.size}
    onClick={props.clicked}
    className={[css.Btn, props.btnColor === 'primary' ? css.Primary : css.Secondary].join(' ')}>
    {props.children}
  </Button>
);

export default btn