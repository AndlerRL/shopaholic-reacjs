import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

import * as actions from '../../store/actions';
import Cart from '../../components/ShoppingCart/ShoppingCart';
import Modal from '../../components/UI/Modal/Modal';

const ShoppingCart = props => {
  const cartProducts = props.productData.map(cart => cart);

  useEffect(() => {
    
  }, [])

  return (
    <Modal
    modalClosed={props.shoppingCartClosed}
    show={props.showShoppingCart}>
      <Cart 
        shoppingCart={cartProducts}
        totalAmount={props.totalAmount}
        backShop={props.showShoppingCart}
      />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    productData: state.shoppingCart.productData,
    totalAmount: state.shoppingCart.totalAmount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTotalAmount: () => dispatch(actions.fetchTotalAmount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);