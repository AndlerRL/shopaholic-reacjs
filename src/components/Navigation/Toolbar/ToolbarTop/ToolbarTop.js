import React from 'react';
import { NavLink } from 'react-router-dom';

import IconF from '../../../UI/Icons/IconF';
import IconM from '../../../UI/Icons/IconM';

import css from './ToolbarTop.css';

const toolbarTop = props => (
  <React.Fragment>
    <div className={css.onlyMobile}>
      <div style={{ cursor: 'pointer' }}
        onClick={props.back}>
        <IconM 
        icon="chevron_left"
        size="large" />
      </div>
      <h1>
        SHOPAHOLIC
      </h1>
      <div style={{ cursor: 'pointer' }}
        onClick={props.toggleMenu}>
        <IconM 
          icon="menu"
          size="large" />
      </div>
    </div>
    <div className={css.ToolbarTop}>
      <div className={css.SignInUp}>
        <h5>
          Hi!{' '}
          <NavLink
            to="/sign-in">
              <span>Sign In</span>
          </NavLink>{' '}or{' '} 
          <NavLink
            to="/register">
            <span>Register</span>
          </NavLink>
        </h5>
      </div>
      <div className={css.AddLinks}>
        <li className={css.NavigationItem}>
          <NavLink
            exact to="/#daily-deals"
            activeClassName={css.active}
            onClick={props.clicked}>
            <h5>Daily Deals</h5>
          </NavLink>
        </li>
        <li className={css.NavigationItem}>
          <NavLink
            exact to="/sell"
            activeClassName={css.active}
            onClick={props.clicked}>
            <h5>Sell</h5>
          </NavLink>
        </li>
        <li className={css.NavigationItem}>
          <NavLink
            exact to="/#help-&-contact"
            activeClassName={css.active}
            onClick={props.clicked}>
            <h5>Help & Contact</h5>
          </NavLink>
        </li>
      </div>
      <div className={css.Currency}>
          <IconF
            color="#4fc3f7"
            size="1rem"
            type="fas"
            icon="flag-usa" />
          <h5>
            $ USD
          </h5>
      </div>
      <div className={css.ShoppingCar}>
        <IconM 
          color="action"
          icon="shopping_basket"
          size="medium" />
        <span
          className={css.shopItems}> 99
        </span>
        <h5>
          Your bag: <span>$999.99</span>
        </h5>
      </div>
    </div>
  </React.Fragment>
);

export default toolbarTop;