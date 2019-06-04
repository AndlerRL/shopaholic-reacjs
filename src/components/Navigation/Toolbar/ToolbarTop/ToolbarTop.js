import React, { useMemo } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import ShoppingCart from '../../../UI/ShoppingCart/ShoppingCart';
import Currency from '../../../UI/Currency/Currency';
import Favorites from '../../../UI/Favorites/Favorites';

import css from './ToolbarTop.css';

const ToolbarTop = props => {
  //console.log(props);
  useMemo(() => props.user, [props]);

  return (
    <div className={css.ToolbarTop}>
      <div className={css.SignInUp}>
        <p>
          Hi!{' '}
          { !props.isAuth ? (
            <React.Fragment>
              <li>
                  <span 
                    onClick={props.signIn}>
                    Sign In
                  </span>
              </li>{' '}or{' '} 
              <li>
                <span 
                  onClick={props.signUp}>
                  Register
                </span>
              </li>
            </React.Fragment>
          ) : (
            <li style={{ cursor: 'default' }}>
              <span>
                { props.user.name }
              </span>
          </li>
          )}
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
            exact to="/#sell"
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
      <Favorites 
        favItems={props.favItems}
        clicked={props.favorites} />
      <ShoppingCart 
        totalBag={props.totalBag}
        itemsCart={props.itemsCart}
        clicked={props.shoppingCart} />
    </div>
  )
};

export default withRouter(ToolbarTop);