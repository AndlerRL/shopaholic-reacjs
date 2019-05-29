import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../store/actions';
import Header from '../../components/Home/Header/Header';
import Main from '../../components/Home/Main/Main';

class Home extends React.Component {
  componentDidMount () {
    console.log(this.props);
  }

  seeSaleHandler = () => {
    this.props.history.push('/products');
  }

  signUpHandler = () => {
    this.props.onSignUp()

    if (this.props.isSignIn)
      this.props.onSignIn()
  }
  
  render () {
    return (
      <React.Fragment>
        <Header 
          seeSales={this.seeSaleHandler} />
        <Main 
          seeSale={this.seeSaleHandler}
          register={this.signUpHandler} />
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    isSignUp: state.auth.isSignUp,
    isSignIn: state.auth.isSignIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);