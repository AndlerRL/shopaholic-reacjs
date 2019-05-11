import React, { useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import css from './Layout.css';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <React.Fragment>
      <Toolbar 
        toggleMenu={sideDrawerToggleHandler} />
      <SideDrawer 
        open={showSideDrawer}
        closed={sideDrawerToggleHandler}
        back={sideDrawerToggleHandler}/>
    </React.Fragment>
  )
};

export default Layout;