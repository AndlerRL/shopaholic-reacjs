import React from 'react';

import css from './Icon.css';

const iconF = props => {
  return (
    <span className={css.Container}>
      <i className={[css.Icon, `${props.type} fa-${props.icon}`].join(' ')} 
        style={{
          fontSize: props.size,
          color: props.color
        }} />
    </span>
  )
};

export default iconF;