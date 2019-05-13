import React from 'react';

import Btn from '../../UI/Btn/Btn';

import css from './Main.css';

const main = props => (
  <React.Fragment>
    <div className={css.MainSale}>
      <div className={css.Product} onClick={props.seeSale}>
        <span>Sale</span>
      </div>
      <div class={css.ProductDetail}>
        <b>Vera Bradley</b>
        <p>
          Carry the day in style with this extra-large tote crafted in our chic B.B Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed. 
        </p>
        <div className={css.BtnContainer}>
          <Btn btnType="contained" btnColor="primary">
            shop now
          </Btn>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default main;