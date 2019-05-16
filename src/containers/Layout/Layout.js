import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';

import css from './Layout.css';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (props.location.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [props.location.pathname])

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  const returnHomeHandler = () => {
    props.history.replace('/');
  }

  const goBackHandler = () => {
    props.history.goBack();
  }

  const authScreenHandler = () => {
    setShowSideDrawer(false);
  }

  const shoppingCartHandler = () => {
    setShowSideDrawer(false);
  }

  return (
    <div className={css.Layout}>
      <Toolbar 
        toggleMenu={sideDrawerToggleHandler}
        clicked={returnHomeHandler}
        back={goBackHandler}
        signIn={props.signIn}
        signUp={props.signUp}
        shoppingCart={props.shoppingCart} />
      <SideDrawer 
        open={showSideDrawer}
        closed={sideDrawerToggleHandler}
        auth={authScreenHandler}
        shoppingCart={shoppingCartHandler}
        back={sideDrawerToggleHandler}
        signIn={props.signIn}
        signUp={props.signUp} />
      <main>
        { props.children }
      </main>
      <Footer home={isHome} />
    </div>
  )
};

export default withRouter(Layout);