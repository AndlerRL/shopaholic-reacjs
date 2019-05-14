import React from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingCar from '../../../UI/ShoppingCar/ShoppingCar';
import Currency from '../../../UI/Currency/Currency';

import css from './ToolbarTop.css';

const toolbarTop = props => (
  <div className={css.ToolbarTop}>
    <div className={css.SignInUp}>
      <p>
        Hi!{' '}
        <NavLink
          to="/sign-in">
            <span 
              onClick={props.signIn}>
              Sign In
            </span>
        </NavLink>{' '}or{' '} 
        <NavLink
          to="/register">
          <span 
            onClick={props.signUp}>
            Register
          </span>
        </NavLink>
      </p>
    </div>
    <div className={css.AddLinks}>
      <li className={css.NavigationItem}>
        <NavLink
          exact to="/#daily-deals"
          activeClassName={css.active}
          onClick={props.clicked}>
          <p>Daily Deals</p>
        </NavLink>
      </li>
      <li className={css.NavigationItem}>
        <NavLink
          exact to="/sell"
          activeClassName={css.active}
          onClick={props.clicked}>
          <p>Sell</p>
        </NavLink>
      </li>
      <li className={css.NavigationItem}>
        <NavLink
          exact to="/#help-&-contact"
          activeClassName={css.active}
          onClick={props.clicked}>
          <p>Help & Contact</p>
        </NavLink>
      </li>
    </div>
    <Currency currency="USD" />
    <ShoppingCar 
      totalBag={9.99}
      itemsCar={1}
      clicked={props.shoppingCar} />
  </div>
);

export default toolbarTop;