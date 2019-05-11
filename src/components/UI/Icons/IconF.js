import React from 'react';

import css from './Icon.css';

const iconF = props => {
  return (
    <div className={css.Container}>
      <i
        className={[css.Icon, `${props.type} fa-${props.icon}`, props.hoverClass].join(' ')} 
        style={{
          fontSize: props.size,
          color: props.color
        }} />
    </div>
  )
};

export default iconF;