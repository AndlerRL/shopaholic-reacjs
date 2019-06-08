import React from 'react';

import Button from '@material-ui/core/Button';
import IconF from '../Icons/IconF';

import css from './Btn.css';

const btnIcon = props => (
  <Button
    variant={props.btnType}
    size={props.size}
    onClick={props.clicked}
    disabled={props.disabled}
    className={[
      css.Btn, 
      props.btnColor === 'primary' ? css.Primary : null,
      props.btnColor === 'secondary' ? css.Secondary : null,
      props.btnColor === 'pagination' ? css.Pagination : null].join(' ')}>
    <IconF 
      size={props.iconSize}
      icon={props.icon}
      type={props.iconType}
      color={props.iconColor} />
    {props.children}
  </Button>
);

export default btnIcon;