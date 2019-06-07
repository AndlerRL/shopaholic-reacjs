import { connect } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import M from 'materialize-css';

import * as actions from '../../store/actions';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Logout from '../Auth/Logout/Logout';
import { Loading } from '../../components/UI/Loading/Loading';

const SignIn = React.lazy(() => {
  return import('../Auth/SignIn/SignIn');
});
const SignUp = React.lazy(() => {
  return import('../Auth/SignUp/SignUp');
});
const ShoppingCart = React.lazy(() => {
  return import('../ShoppingCart/ShoppingCart');
})
const Favorites = React.lazy(() => {
  return import('../Favorites/Favorites');
})
const Products = React.lazy(() => {
  return import('../Products/Products');
})
const Product = React.lazy(() => {
  return import('../Products/Product/Product');
})
const Checkout = React.lazy(() => {
  return import('../Checkout/Checkout');
})
const Orders = React.lazy(() => {
  return import('../Orders/Orders');
})
const Payout = React.lazy(() => {
  return import('../Orders/Payout/Payout');
})

const App = props => {
  useEffect(() => {
    props.onTryAuthSignUp();

    M.AutoInit();

    const root = document.querySelector('#root');

    if (props.isSignIn) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    if (props.isSignUp) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    if (props.isShoppingCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSignInHandler = () => {
    props.onSignIn()

    if (props.isSignUp) {
      props.onSignUp()
    }

    if (props.isShoppingCart)
      props.onShoppingCart()

    if (props.sideDrawer)
      props.onSideDrawer()

    if (props.isFavorite)
      props.onFavorites();
  }

  const showSignUpHandler = () => {
    props.onSignUp()

    if (props.isSignIn) {
      props.onSignIn()
    }

    if (props.isShoppingCart)
      props.onShoppingCart()

    if (props.sideDrawer)
      props.onSideDrawer()

    if (props.isFavorite)
      props.onFavorites();
  }

  const showShoppingCartHandler = () => {
    props.onShoppingCart()

    if (props.isSignIn)
      props.onSignIn()

    if (props.isSignUp)
      props.onSignUp()

    if (props.sideDrawer)
      props.onSideDrawer()

    if (props.isFavorite)
      props.onFavorites();
  }

  const showFavoritesHandler = () => {
    props.onFavorites();

    if (props.isSignIn)
      props.onSignIn()

    if (props.isSignUp)
      props.onSignUp()

    if (props.sideDrawer)
      props.onSideDrawer()

    if (props.isShoppingCart)
      props.onShoppingCart()
  }

  const sideDrawerHandler = () => {
    props.onSideDrawer()
  }

  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" render={props => <Products {...props} />} />
      <Route exact path="/product-details" render={props => <Product {...props} />} />
      <Redirect to="/" />
    </Switch>
  )

  if (props.isAuthenticated)
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" render={props => <Products {...props} />} />
        <Route exact path="/product-details" render={props => <Product {...props} />} />
        <Route exact path="/orders" render={props => <Orders {...props} />} />
        <Route exact path="/orders/checkout" render={props => <Payout {...props} />} />
        <Route exact path="/logout" render={props => <Logout {...props} />} />
        <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Redirect to="/" />
      </Switch>
    )
  
  return (
    <Layout
      sideDrawer={sideDrawerHandler}
      showSideDrawer={props.sideDrawer}
      signIn={showSignInHandler}
      signUp={showSignUpHandler}
      shoppingCart={showShoppingCartHandler}
      itemsCart={props.cart.length}
      totalBag={props.totalAmount ? props.totalAmount : '0.00'}
      isAuth={props.isAuthenticated}
      user={props.userData}
      favItems={props.favorites.length}
      favorites={showFavoritesHandler} >
      <Suspense fallback={<Loading />}>
        <SignIn 
          signInClosed={showSignInHandler}
          showSignIn={props.isSignIn}
          backShop={showSignInHandler}
          switchSignUp={showSignUpHandler} />
        <SignUp 
          signUpClosed={showSignUpHandler}
          showSignUp={props.isSignUp}
          backShop={showSignUpHandler}
          switchSignIn={showSignInHandler} />
        <ShoppingCart 
          shoppingCartClosed={showShoppingCartHandler}
          showShoppingCart={props.isShoppingCart} />
        <Favorites 
          favoritesClosed={showFavoritesHandler}
          showFavorites={props.isFavorite}
          backShop={showFavoritesHandler} />
        { routes }
      </Suspense>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart,
    totalAmount: state.shoppingCart.totalAmount,
    favorites: state.shoppingCart.favorites,
    sideDrawer: state.auth.sideDrawer,
    isSignIn: state.auth.isSignIn,
    isSignUp: state.auth.isSignUp,
    isShoppingCart: state.shoppingCart.isShoppingCart,
    isFavorite: state.shoppingCart.onFavorite,
    queryStr: state.products.meta.query_string,
    isSearch: state.products.search,
    isAuthenticated: state.auth.token !== null,
    userData: state.auth.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
    onShoppingCart: () => dispatch(actions.goToShoppingCart()),
    onFavorites: () => dispatch(actions.goToFavorites()),
    onSideDrawer: () => dispatch(actions.handleSideDrawer()),
    onTryAuthSignUp:() => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(App)));
