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

const cart_id = JSON.parse(localStorage.getItem('cart_id'));

class App extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
    isShoppingCart: false,
  }
  
  componentDidMount () {
    M.AutoInit();
    this.props.onFetchShoppingCart(cart_id);
    this.props.onFetchTotalAmount();
  }

  componentDidUpdate () {
    const root = document.querySelector('#root');
    const cart = document.querySelector('.ShoppingCart');
    if (this.state.isSignIn || this.state.isSignUp || this.state.isShoppingCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    if (this.state.isShoppingCart) {
      enableBodyScroll(cart)
    }

    this.props.onFetchTotalAmount();
  }

  showSignInHandler = () => {
    this.setState(prevState => {
      return {
        isSignIn: !prevState.isSignIn
      }
    })

    if (this.state.isSignUp) {
      this.setState({ isSignUp: false })
    }
  }

  showSignUpHandler = () => {
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      }
    })

    if (this.state.isSignIn) {
      this.setState({ isSignIn: false })
    }
  }

  showShoppingCartHandler = () => {
    this.setState(prevState => {
      return {
        isShoppingCart: !prevState.isShoppingCart
      }
    })
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

    const totalAmount = this.props.totalAmount
    const totalCart = this.props.productData.length;
  
    return (
      <Layout
        signIn={this.showSignInHandler}
        signUp={this.showSignUpHandler}
        shoppingCart={this.showShoppingCartHandler}
        itemsCart={totalCart}
        totalBag={totalAmount}>
        <Suspense fallback={<Loading />}>
          <SignIn 
            signInClosed={this.showSignInHandler}
            showSignIn={this.state.isSignIn}
            backShop={this.showSignInHandler} />
          <SignUp 
            signUpClosed={this.showSignUpHandler}
            showSignUp={this.state.isSignUp}
            backShop={this.showSignUpHandler} />
          <ShoppingCart 
            shoppingCartClosed={this.showShoppingCartHandler}
            showShoppingCart={this.state.isShoppingCart} />
          { routes }
        </Suspense>
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  return {
    productData: state.shoppingCart.productData,
    totalAmount: state.shoppingCart.totalAmount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShoppingCart: cartId => dispatch(actions.fetchShoppingCart(cartId)),
    onFetchTotalAmount: () => dispatch(actions.fetchTotalAmount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(App)), (prevProps, nextProps) => nextProps.productData === prevProps.productData && nextProps.totalAmount === prevProps.totalAmount);
