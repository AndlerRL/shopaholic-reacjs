import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

import * as actions from '../../store/actions';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = props => {
  useEffect(() => {
    props.onFetchRegions();

    if (!props.isAuthenticated)
      props.onSetAuthRedirectPath('/');
  }, []);

  const purchaseOrderHandler = () => {
    props.history.replace('/checkout/contact-data')
  }

  const cancelOrderHandler = () => {
    props.history.goBack();
  }
  
  const regions = props.regions.map(region => {
    return {
      value: region.shipping_region_id,
      displayValue: region.shipping_region 
    }
  });
  const cartItems = props.cart.map(cart => cart);
  const purchaseRedirect = props.purchased ? <Redirect to="/products" /> : null;
  
  return (
    <React.Fragment>
      { purchaseRedirect }
      <CheckoutSummary
        order={cartItems}
        purchaseOrder={purchaseOrderHandler}
        cancelOrder={cancelOrderHandler} />
      <Route
        path={props.match.path + '/contact-data'}
        render={props => <ContactData regions={regions} /> } />
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart,
    isAuthenticated: state.auth.token !== null,
    purchased: state.orders.purchased,
    regions: state.shipping.regions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
    onCheckout: () => dispatch(actions.onCheckout()),
    onFetchRegions: () => dispatch(actions.fetchRegions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));