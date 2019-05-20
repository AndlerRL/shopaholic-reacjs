import React from 'react';

import Btn from '../../UI/Btn/Btn';

import css from './ProductsFooter.css';

const productsFooter = props => (
  <div className={css.ProductsFooter}>
    <div className={css.FooterContainer}>
      <h2>Converse</h2>
      <p>Explore styles tough enough to<br/> handle all your workouts</p>
      <div className={css.BtnContainer}>
        <Btn 
          btnColor="secondary"
          btnType="contained">
          Shop Brand
        </Btn>
      </div>
    </div>
  </div>
);

export default productsFooter;