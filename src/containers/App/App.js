import { connect } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import M from 'materialize-css';

import * as actions from '../../store/actions';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
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
const Products = React.lazy(() => {
  return import('../Products/Products');
})
const Product = React.lazy(() => {
  return import('../Products/Product/Product');
})
const Checkout = React.lazy(() => {
  return import('../Checkout/Checkout');
})

const App = props => {
  useEffect(() => {
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
  }

  const showShoppingCartHandler = () => {
    props.onShoppingCart()

    if (props.isSignIn)
      props.onSignIn()

    if (props.isSignUp)
      props.onSignUp()

    if (props.sideDrawer)
      props.onSideDrawer()
  }

  const sideDrawerHandler = () => {
    props.onSideDrawer()
  }

  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" render={props => <Products {...props} />} />
      <Route exact path={`/product-details`} render={props => <Product {...props} />} />
      <Route exact path="/checkout" render={props => <Checkout {...props} />} />
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
      itemsCart={props.productData.length}
      totalBag={props.totalAmount ? props.totalAmount : '0.00'} >
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
        { routes }
      </Suspense>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    productData: state.shoppingCart.productData,
    totalAmount: state.shoppingCart.totalAmount,
    sideDrawer: state.auth.sideDrawer,
    isSignIn: state.auth.isSignIn,
    isSignUp: state.auth.isSignUp,
    isShoppingCart: state.shoppingCart.isShoppingCart,
    queryStr: state.products.meta.query_string,
    isSearch: state.products.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
    onShoppingCart: () => dispatch(actions.goToShoppingCart()),
    onSideDrawer: () => dispatch(actions.handleSideDrawer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(App)));
