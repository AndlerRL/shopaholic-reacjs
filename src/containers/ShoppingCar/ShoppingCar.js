import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const ShoppingCar = props => {
  return (
    <Modal
    modalClosed={props.shoppingCarClosed}
    show={props.showShoppingCar}>
      <h1>Shopping Car Screen</h1>
    </Modal>
  );
};

export default ShoppingCar;