import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Modal from '../../components/UI/Modal/Modal';
import Home from '../Home/Home';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';

import Layout from '../Layout/Layout';

import css from './App.css';

class App extends React.Component {
  state = {
    isAuth: true
  }

  showSignInHandler = () => {
    this.setState({
      isAuth: true
    })
  }

  cancelSignInHandler = () => {
    this.setState({
      isAuth: false
    })
  }

  render () {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" render={() => (
          <Modal
            modalClosed={this.cancelSignInHandler}
            show={this.state.isAuth}>
            <SignIn />
          </Modal>
        )} />
        <Route path="/register" component={SignUp} />
      </Switch>
    )
  
    return (
      <Layout
        signIn={this.showSignInHandler}>
        { routes }
      </Layout>
    );
  }
}

export default withRouter(App);
