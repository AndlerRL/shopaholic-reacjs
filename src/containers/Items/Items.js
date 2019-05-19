import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import * as actions from '../../store/actions';

const Items = props => {
  useEffect(() => {
    props.onGetProducts(props.products);
  }, []);
  
  return (
    <h1>
      ITEMS PAGE
    </h1>
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: products => dispatch(actions.productsSuccess(1, 20, 200, products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));