import React from 'react';

import IconM from '../../UI/Icons/IconM';
import ToolbarTop from './ToolbarTop/ToolbarTop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../UI/Form/Search/Search';

import css from './Toolbar.css';

const Toolbar = props => {
  let navigation = null;

  if (window.outerWidth > 700)
    navigation = (
      <React.Fragment>
        <ToolbarTop toggleMenu={props.toggleMenu} />
          <div className={css.Toolbar}>
            <p className={css.Title}>
              SHOPAHOLIC
            </p> 
            <NavigationItems />
            <Search />
        </div>
      </React.Fragment>
    )

  return (
    <React.Fragment>
      <div className={css.OnlyMobile}>
        <div style={{ cursor: 'pointer' }}
          onClick={props.back}>
          <IconM 
          icon="chevron_left"
          size="large" />
        </div>
        <p>
          SHOPAHOLIC
        </p>
        <div style={{ cursor: 'pointer' }}
          onClick={props.toggleMenu}>
          <IconM 
            icon="menu"
            size="large" />
        </div>
      </div>
      { navigation }
    </React.Fragment>
  )
};

export default Toolbar;