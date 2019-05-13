import React from 'react';

import IconM from '../../UI/Icons/IconM';
import ToolbarTop from './ToolbarTop/ToolbarTop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../../UI/Form/Search/Search';

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
      <div className={css.OnlyDesktop}>
        <ToolbarTop toggleMenu={props.toggleMenu} />
        <div className={css.Toolbar}>
          <p className={css.Title}>
            SHOPAHOLIC
          </p> 
          <NavigationItems show={css.Show} />
          <Search show={css.Show} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default Toolbar;