import React from 'react';

import css from './Loading.css';

export const Loading = props => (
  <div className={css.LdsCircle}>
    <div></div>
    <span>Loading</span>
  </div>
);

export const LoadingText = props => (
  <div className={css.LdsEllipsis} style={props.style}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export const LoadingImg = props => (
  <div className={css.LdsFacebook} style={props.style}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)