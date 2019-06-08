import React from 'react';

import IconF from '../Icons/IconF';

import css from './Favorites.css'

const favorites = props => (
  <div className={css.Favorites} onClick={props.clicked}>
    <div className={css.Icon}>
      <IconF 
        color="#df0000"
        type="fas"
        icon="heart"
        size={window.outerWidth > 750 ? "1.2rem" : "1rem"} />
      { props.favItems >= 1 ? (
        <span className={css.Items}>
          {props.favItems}
        </span> ) : null }
    </div>
  </div>
);

export default favorites;