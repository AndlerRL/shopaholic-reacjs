import React, { useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';

import css from './Layout.css';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <div className={css.Layout}>
      <Toolbar 
        toggleMenu={sideDrawerToggleHandler} />
      <SideDrawer 
        open={showSideDrawer}
        closed={sideDrawerToggleHandler}
        back={sideDrawerToggleHandler}/>
      <main>
        { props.children }
      </main>
      <Footer />
    </div>
  )
};

export default Layout;