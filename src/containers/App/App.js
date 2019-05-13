import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from '../Home/Home';

import Layout from '../Layout/Layout';

import css from './App.css';

function App() {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <Layout>
      { routes }
    </Layout>
  );
}

export default withRouter(App);
