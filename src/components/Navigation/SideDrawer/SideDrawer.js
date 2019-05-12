import React from 'react';
import { NavLink } from 'react-router-dom';

import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../UI/Form/Search/Search';
import ShoppingCar from '../../UI/ShoppingCar/ShoppingCar';

import css from './SideDrawer.css';
import Currency from '../../UI/Currency/Currency';

const sideDrawer = props => {
  let attachedCss = [css.SideDrawer, css.Close];

  if (props.open) {
    attachedCss = [css.SideDrawer, css.Open]
  }
  
  return (
    <React.Fragment>
      <Backdrop
        show={props.open}
        cancel={props.closed} />
      <div className={attachedCss.join(' ')}>
        <div className={css.SignInUp}>
          <p>
            Hi!{' '}
            <NavLink
              to="/sign-in">
                <span>Sign In</span>
            </NavLink>{' '}or{' '} 
            <NavLink
              to="/register">
              <span>Register</span>
            </NavLink>
          </p>
        </div>
        <Currency clicked={props.currency} />
        <ShoppingCar clicked={props.shoppingCar} />
        <Search clicked={props.search} />
        <nav>
          <NavigationItems
            isAuthenticated={props.isAuth}
            clicked={props.closed} />
        </nav>
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
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;