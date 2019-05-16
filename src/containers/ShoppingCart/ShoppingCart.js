import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const ShoppingCart = props => {
  return (
    <Modal
    modalClosed={props.shoppingCartClosed}
    show={props.showShoppingCart}>
      <h1>Shopping Car Screen</h1>
    </Modal>
  );
};

export default ShoppingCart;