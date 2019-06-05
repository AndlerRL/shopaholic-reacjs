import { connect } from 'react-redux';
import React, { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom'

import * as actions from '../../store/actions';
import Cart from '../../components/ShoppingCart/ShoppingCart';
import Modal from '../../components/UI/Modal/Modal';

const cart_id = JSON.parse(localStorage.getItem('cart_id'));

const ShoppingCart = props => {
  const [remove, setRemove] = useState(false);
  const [deleted, setDelete] = useState(false);
  const cartProducts = props.cart.map(cart => cart);

  useEffect(() => {
    props.onFetchShoppingCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(() => props.onFetchTotalAmount(), [props])

  const updateProductHandler = item => e => {
    e.preventDefault();

    const update = {
      item_id: item.id,
      quantity: item.quantity
    }

    props.onUpdateProduct(item.id, update);
  }

  const removeProductHandler = item_id => e => {
    e.preventDefault();
    setRemove(true)
    //console.log(item_id);

    setTimeout(() => {
      setRemove(false)
      props.onRemoveProduct(item_id);
    }, 650)
  }

  const deleteCartHandler = e => {
    e.preventDefault();
    setDelete(true)

    setTimeout(() => {
      props.onDeleteCart(cart_id);
      setDelete(false)
      props.history.push('/products');
    }, 650)
  }

  const checkoutHandler = () => {
    props.onCheckout();

    if (props.isAuthenticated) {
      props.history.push('/checkout')

      if (props.isShoppingCart)
        props.onShoppingCart()
    } else {
      props.onSetAuthRedirectPath('/checkout')
      props.onCheckout();
      props.onSignIn();
      
      if (props.isShoppingCart)
        props.onShoppingCart()
    }
  }

  return (
    <Modal
      modalClosed={props.shoppingCartClosed}
      show={props.showShoppingCart}>
      <Cart 
        shoppingCart={cartProducts}
        totalAmount={props.totalAmount}
        backShop={props.shoppingCartClosed}
        updateProduct={updateProductHandler}
        quantity={props.quantity}
        removeProduct={removeProductHandler}
        deleteCart={deleteCartHandler}
        deleted={deleted}
        remove={remove}
        checkout={checkoutHandler} />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart,
    totalAmount: state.shoppingCart.totalAmount,
    quantity: state.shoppingCart.quantity,
    isShoppingCart: state.shoppingCart.isShoppingCart,
    isSignIn: state.auth.isSignIn,
    isSignUp: state.auth.isSignUp,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShoppingCart: () => dispatch(actions.fetchShoppingCart()),
    onFetchTotalAmount: () => dispatch(actions.fetchTotalAmount()),
    onUpdateProduct: (itemId, quantity) => dispatch(actions.updateProduct(itemId, quantity)),
    onRemoveProduct: itemId => dispatch(actions.removeProduct(itemId)),
    onDeleteCart: cartId => dispatch(actions.deleteShoppingCart(cartId)),
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
    onShoppingCart: () => dispatch(actions.goToShoppingCart()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
    onCheckout: () => dispatch(actions.onCheckout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(ShoppingCart)));