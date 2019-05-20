import React from 'react';

import css from './Loading.css';

const loading = () => (
  <div className={css.LdsCircle}>
    <div></div>
    <span>Loading</span>
  </div>
);

export default loading;