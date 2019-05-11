import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import IconM from '../../UI/Icons/IconM';
import NavigationItems from '../NavigationItems/NavigationItems';

import css from './SideDrawer.css';

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
        <nav>
          <NavigationItems
            isAuthenticated={props.isAuth}
            clicked={props.closed} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;