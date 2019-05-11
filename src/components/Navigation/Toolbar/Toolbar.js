import React from 'react';

import IconM from '../../UI/Icons/IconM';
import ToolbarTop from './ToolbarTop/ToolbarTop';
import NavigationItems from '../NavigationItems/NavigationItems';

import css from './Toolbar.css';

const Toolbar = props => {
  let navigation = null;

  if (window.outerWidth > 700)
    navigation = (
      <div className={css.Nav}>
        <h2>
          SHOPAHOLIC
        </h2> 
        <NavigationItems />
      </div>
    )

  return (
    <React.Fragment>
      <ToolbarTop toggleMenu={props.toggleMenu} />
      <div className={css.Toolbar}>
        { navigation }
      </div>
    </React.Fragment>
  )
};

export default Toolbar;