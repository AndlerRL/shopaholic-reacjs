import { connect } from 'react-redux';
import React, { Suspense } from 'react';
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

class App extends React.Component {
  componentDidMount () {
    M.AutoInit();
    this.props.onFetchTotalAmount();
  }

  componentDidUpdate () {
    const root = document.querySelector('#root');
    if (this.props.isSignIn) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    if (this.props.isSignUp) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    if (this.props.isShoppingCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    //this.props.onFetchTotalAmount();
  }

  showSignInHandler = () => {
    this.props.onSignIn()

    if (this.props.isSignUp) {
      this.props.onSignUp()
    }

    if (this.props.isShoppingCart)
      this.props.onShoppingCart()
  }

  showSignUpHandler = () => {
    this.props.onSignUp()

    if (this.props.isSignIn) {
      this.props.onSignIn()
    }

    if (this.props.isShoppingCart)
      this.props.onShoppingCart()
  }

  showShoppingCartHandler = () => {
    this.props.onShoppingCart()

    if (this.props.isSignIn)
      this.props.onSignIn()

    if (this.props.isSignUp)
      this.props.onSignUp()
  }

  render () {
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
        signIn={this.showSignInHandler}
        signUp={this.showSignUpHandler}
        shoppingCart={this.showShoppingCartHandler}
        itemsCart={this.props.productData.length}
        totalBag={this.props.totalAmount ? this.props.totalAmount : '0.00'}>
        <Suspense fallback={<Loading />}>
          <SignIn 
            signInClosed={this.showSignInHandler}
            showSignIn={this.props.isSignIn}
            backShop={this.showSignInHandler}
            switchSignUp={this.showSignUpHandler} />
          <SignUp 
            signUpClosed={this.showSignUpHandler}
            showSignUp={this.props.isSignUp}
            backShop={this.showSignUpHandler}
            switchSignIn={this.showSignInHandler} />
          <ShoppingCart 
            shoppingCartClosed={this.showShoppingCartHandler}
            showShoppingCart={this.props.isShoppingCart} />
          { routes }
        </Suspense>
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  return {
    productData: state.shoppingCart.productData,
    totalAmount: state.shoppingCart.totalAmount,
    isSignIn: state.auth.isSignIn,
    isSignUp: state.auth.isSignUp,
    isShoppingCart: state.shoppingCart.isShoppingCart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShoppingCart: cartId => dispatch(actions.fetchShoppingCart(cartId)),
    onFetchTotalAmount: () => dispatch(actions.fetchTotalAmount()),
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
    onShoppingCart: () => dispatch(actions.goToShoppingCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(
  withRouter(App)),
  (prevProps, nextProps) => nextProps.cart === prevProps.cart &&
  nextProps.totalAmount === prevProps.totalAmount);
