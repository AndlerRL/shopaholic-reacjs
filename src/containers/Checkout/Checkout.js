import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

import * as actions from '../../store/actions';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Snackbar from '../../components/UI/Snackbar/Snackbar';

const Checkout = props => {
  useEffect(() => {
    props.onFetchRegions();
    props.onFetchTaxes();

    if (!props.isAuthenticated)
      props.onSetAuthRedirectPath('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.purchased)
      window.scroll(0, 0);
  }, [props]);

  const purchaseOrderHandler = () => {
    props.history.replace('/checkout/contact-data')
  }

  const cancelOrderHandler = () => {
    props.history.goBack();
  }

  const snackbarHandler = (e, reason) => {
    if (reason === 'clickaway')
      return;

    //props.onConfirmAdded();
  }
  
  const regions = props.regions.map(region => {
    return {
      value: region.shipping_region_id,
      displayValue: region.shipping_region 
    }
  });
  const cartItems = props.cart.map(cart => cart);
  const taxes = props.taxes.map(tax => tax);
  const purchaseRedirect = props.purchased ? <Redirect to="/products" /> : null;

  let snackbar = null;

  if (props.purchased)
    snackbar = (
      <Snackbar
        success={true}
        message="Order successfully completed!"
        open={props.purchased}
        closed={snackbarHandler} />
    )

  if (props.error)
    snackbar = (
      <Snackbar
        error={true}
        message={`[ERROR]: ${props.error.message}`}
        open={props.error !== null}
        closed={snackbarHandler} />
    )
  
  return (
    <React.Fragment>
      { purchaseRedirect }
      <CheckoutSummary
        order={cartItems}
        purchaseOrder={purchaseOrderHandler}
        cancelOrder={cancelOrderHandler} />
      <Route
        path={props.match.path + '/contact-data'}
        render={
          props => <ContactData regions={regions} taxes={taxes} /> 
        } />
      { snackbar }
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart,
    isAuthenticated: state.auth.token !== null,
    purchased: state.orders.purchased,
    regions: state.shipping.regions,
    taxes: state.tax.taxes,
    error: state.orders.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
    onCheckout: () => dispatch(actions.onCheckout()),
    onFetchRegions: () => dispatch(actions.fetchRegions()),
    onFetchTaxes: () => dispatch(actions.fetchTaxes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));