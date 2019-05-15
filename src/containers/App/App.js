import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import M from 'materialize-css';

import Home from '../Home/Home';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import ShoppingCar from '../ShoppingCar/ShoppingCar';
import Women from '../Items/Screens/Women/Women';
import Men from '../Items/Screens/Men/Men';
import Kids from '../Items/Screens/Kids/Kids';
import Brands from '../Items/Screens/Brands/Brands.js';
import Shoes from '../Items/Screens/Shoes/Shoes';
import Checkout from '../Checkout/Checkout';
import Layout from '../Layout/Layout';

import css from './App.css';

class App extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
    isShoppingCar: false,
  }

  componentDidMount () {
    M.AutoInit();
  }

  componentDidUpdate () {
    const root = document.querySelector('#root');
    if (this.state.isSignIn || this.state.isSignUp || this.state.isShoppingCar) {
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
  }

  showSignUpHandler = () => {
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      }
    })
  }

  showShoppingCarHandler = () => {
    this.setState(prevState => {
      return {
        isShoppingCar: !prevState.isShoppingCar
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
        shoppingCar={this.showShoppingCarHandler}>
        <SignIn 
          signInClosed={this.showSignInHandler}
          showSignIn={this.state.isSignIn} />
        <SignUp 
          signUpClosed={this.showSignUpHandler}
          showSignUp={this.state.isSignUp} />
        <ShoppingCar 
          shoppingCarClosed={this.showShoppingCarHandler}
          showShoppingCar={this.state.isShoppingCar} />
        { routes }
      </Layout>
    );
  }
}

export default withRouter(App);
