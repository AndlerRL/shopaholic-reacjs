import React from 'react';

import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import { AttachMoney } from '@material-ui/icons';
import IconF from '../Icons/IconF';

import css from './Slider.css';

const slider = props => (
  <div className={css.Container}>
    <Typography id={props.labelId}> 
      <span>{props.label}
      <IconF 
        type="fas"
        size="1rem"
        icon="greater-than-equal"
        color="#90caf9" />
      ${props.sliderValue.toFixed(2)}</span>
    </Typography>
    <Slider
      className={css.Slider}
      value={props.sliderValue}
      aria_labelledby={props.labelId}
      onChange={props.changed}
      min={0}
      max={25}
      thumb={ <AttachMoney style={{
        backgroundColor: '#4caf50',
        color: '#f5f5f5', 
        padding: 1,
        transform: 'scale(1.6)',
        borderRadius: '50%'
      }} /> } />
  </div>
);

export default slider;