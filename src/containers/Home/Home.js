import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions';
import Header from '../../components/Home/Header/Header';
import Main from '../../components/Home/Main/Main';

const Home = props => {
  const seeSaleHandler = () => {
    props.history.push('/products');
  }

  const signUpHandler = () => {
    props.onSignUp()

    if (props.isSignIn)
      props.onSignIn()
  }

  let authRedirect = null;

  if (props.isAuthenticated && props.onCheckout)
    authRedirect = <Redirect to={props.authRedirectPath} />
  
  if (props.onCheckout && (props.match.path === "/checkout" || props.match.path === "/checkout/contact-data"))
    authRedirect = null;
  
  return (
    <React.Fragment>
      { authRedirect }
      <Header 
        seeSales={seeSaleHandler} />
      <Main 
        seeSale={seeSaleHandler}
        register={signUpHandler} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isSignUp: state.auth.isSignUp,
    isSignIn: state.auth.isSignIn,
    onCheckout: state.orders.onCheckout,
    authRedirectPath: state.auth.authRedirectPath,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);