import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';

import css from './Layout.css';

const Layout = props => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (props.location.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [props.location.pathname])

  const returnHomeHandler = () => {
    props.history.replace('/');
  }

  const goBackHandler = () => {
    props.history.goBack();
  }

  return (
    <div className={css.Layout}>
      <Toolbar 
        toggleMenu={props.sideDrawer}
        clicked={returnHomeHandler}
        back={goBackHandler}
        signIn={props.signIn}
        signUp={props.signUp}
        shoppingCart={props.shoppingCart}
        itemsCart={props.itemsCart}
        totalBag={props.totalBag} />
      <SideDrawer 
        open={props.showSideDrawer}
        closed={props.sideDrawer}
        shoppingCart={props.shoppingCart}
        back={props.sideDrawer}
        signIn={props.signIn}
        signUp={props.signUp}
        itemsCart={props.itemsCart}
        totalBag={props.totalBag} />
      <main>
        { props.children }
      </main>
      <Footer home={isHome} />
    </div>
  )
};

export default withRouter(Layout);