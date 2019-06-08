import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions';

const Logout = props => {
  useEffect(() => {
    props.onLogout();
    window.FB.logout();

    if (props.isSideDrawer)
      props.onSidedrawer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Redirect to="/" />
  )
}; 

const mapStateToProps = state => {
  return {
    isSideDrawer: state.auth.sideDrawer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onSidedrawer: () => dispatch(actions.handleSideDrawer())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
