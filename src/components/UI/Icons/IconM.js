import React from 'react';
import Icons from '@material-ui/core/Icon';

import css from './Icon.css';

const iconM = props => {
  return (
    <div className={css.Container}>
      <Icons 
        className={[css.Icon, props.hoverClass].join(' ')}
        color={props.color}
        fontSize={props.size}>
        { props.icon }
      </Icons>
    </div>
  )
};

export default iconM;