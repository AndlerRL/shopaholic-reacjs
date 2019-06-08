import React from 'react';

import css from './Header.css';

import Btn from '../../UI/Btn/Btn';

const header = props => (
  <div className={css.Header}>
    <div className={css.HeaderContainer}>
      <div className={css.HeaderTitle}>
        <b>Background</b> and
        <b>development</b>
        <p>
          Convergent the dictates of the consumer: background and development
        </p>
      </div>
      <div className={css.BtnContainer}>
        <Btn 
          btnType="contained"
          btnColor="secondary"
          clicked={props.seeSales}>
          view all
        </Btn>  
      </div>
    </div>
  </div>
);

export default header;