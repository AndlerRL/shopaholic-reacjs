import React from 'react';

import IconM from '../../UI/Icons/IconM';
import ToolbarTop from './ToolbarTop/ToolbarTop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../../containers/Search/Search';

import css from './Toolbar.css';

const Toolbar = props => {
  return (
    <React.Fragment>
      <div className={css.OnlyMobile}>
        <div style={{ cursor: 'pointer' }}
          onClick={props.back}>
          <IconM 
          icon="chevron_left"
          size="large" />
        </div>
        <p onClick={props.clicked}
          style={{ cursor: 'pointer' }}>
          SHOPAHOLIC
        </p>
        <div style={{ cursor: 'pointer' }}
          onClick={props.toggleMenu}>
          <IconM 
            icon="menu"
            size="large" />
        </div>
      </div>
      <div className={css.OnlyDesktop}>
        <ToolbarTop 
          toggleMenu={props.toggleMenu}
          signIn={props.signIn}
          signUp={props.signUp}
          itemsCart={props.itemsCart}
          totalBag={props.totalBag}
          shoppingCart={props.shoppingCart} />
        <div className={css.Toolbar}>
          <p 
            className={css.Title} 
            onClick={props.clicked} 
            style={{ cursor: 'pointer' }}>
            SHOPAHOLIC
          </p> 
          <NavigationItems show={css.Show} />
          <Search />
        </div>
      </div>
    </React.Fragment>
  )
};

export default Toolbar;