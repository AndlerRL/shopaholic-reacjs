import React from 'react';
import Icons from '@material-ui/core/Icon';

import css from './Icon.css';

const iconM = props => {
  return (
    <div className={css.Container} onClick={props.clicked}>
      <Icons 
        className={[props.prefix, css.Icon].join(' ')}
        color={props.color}
        fontSize={props.size}>
        { props.icon }
      </Icons>
    </div>
  )
};

export default iconM;