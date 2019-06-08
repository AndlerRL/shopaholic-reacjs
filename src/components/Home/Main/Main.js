import React from 'react';

import Btn from '../../UI/Btn/Btn';

import css from './Main.css';

const main = props => (
  <React.Fragment>
    <div className={css.MainSale}>
      <div 
        className={css.Product}
        onClick={props.seeSale}>
        <span>Sale</span>
      </div>
      <div className={css.ProductDetail}>
        <b>Vera Bradley</b>
        <p>
          Carry the day in style with this extra-large tote crafted in our chic B.B Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed. 
        </p>
        <div className={css.BtnContainer}>
          <Btn 
            btnType="contained"
            btnColor="primary"
            clicked={props.seeSale}>
            shop now
          </Btn>
        </div>
      </div>
    </div>
    <div className={css.MainContent}>
      <aside className={css.Sales}>
        <div onClick={props.seeSale}>
          WOW
          <span>
            Check What!
          </span>
        </div>
        <div onClick={props.seeSale}>
        </div>
      </aside>
      <aside className={css.Blog}>
        <div 
          className={css.Img}
          onClick={props.register}>
          <span>POP</span>
        </div>
        <div className={css.Content}>
          <b>Let the Game begin</b>
          <p>Registration is on – get ready for the Open</p>
          <div className={css.BtnContainer}>
            <Btn 
              btnType="contained"
              btnColor="primary"
              clicked={props.register}>
              register
            </Btn>
          </div>
        </div>
      </aside>    
    </div>
  </React.Fragment>
);

export default main;