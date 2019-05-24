import React from 'react';

import css from './Loading.css';

export const Loading = () => (
  <div className={css.LdsCircle}>
    <div></div>
    <span>Loading</span>
  </div>
);

export const LoadingText = () => (
  <div className={css.LdsEllipsis}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)