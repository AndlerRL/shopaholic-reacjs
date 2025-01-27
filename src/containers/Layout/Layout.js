import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Footer from '../../components/UI/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

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
        totalBag={props.totalBag}
        searchClicked={props.searchClicked}
        isAuth={props.isAuth}
        user={props.user}
        favItems={props.favItems}
        favorites={props.favorites} />
      <SideDrawer 
        open={props.showSideDrawer}
        closed={props.sideDrawer}
        shoppingCart={props.shoppingCart}
        back={props.sideDrawer}
        signIn={props.signIn}
        signUp={props.signUp}
        itemsCart={props.itemsCart}
        totalBag={props.totalBag}
        isAuth={props.isAuth}
        user={props.user}
        favItems={props.favItems}
        favorites={props.favorites} />
      <main>
        { props.children }
      </main>
      <Footer home={isHome} />
    </div>
  )
};

export default withRouter(Layout);