import React, { Suspense } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import M from 'materialize-css';

import Home from '../Home/Home';
import Women from '../Items/Screens/Women/Women';
import Men from '../Items/Screens/Men/Men';
import Kids from '../Items/Screens/Kids/Kids';
import Brands from '../Items/Screens/Brands/Brands.js';
import Shoes from '../Items/Screens/Shoes/Shoes';
import Checkout from '../Checkout/Checkout';
import Layout from '../Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';

import css from './App.css';

const SignIn = React.lazy(() => {
  return import('../Auth/SignIn/SignIn');
});
const SignUp = React.lazy(() => {
  return import('../Auth/SignUp/SignUp');
});
const ShoppingCart = React.lazy(() => {
  return import('../ShoppingCart/ShoppingCart');
})

class App extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
    isShoppingCart: false,
  }

  componentDidMount () {
    M.AutoInit();
  }

  componentDidUpdate () {
    const root = document.querySelector('#root');
    if (this.state.isSignIn || this.state.isSignUp || this.state.isShoppingCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }
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
        <Route exact path="/women" component={Women} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/kids" component={Kids} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/brands" component={Brands} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    )
  
    return (
      <Layout
        signIn={this.showSignInHandler}
        signUp={this.showSignUpHandler}
        shoppingCart={this.showShoppingCartHandler}>
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
}

export default withRouter(App);
