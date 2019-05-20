import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import * as actions from '../../store/actions';
import Products from '../../components/Products/Products';

const Items = props => {
  const [color, setColor] = useState([
    'white',
    'black',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple'
  ]);
  useEffect(() => {
    props.onGetProducts(props.page, props.products);
  }, []);

  const nextPageHandler = () => {
    props.onNextPage(props.page, props.products);
  }

  const prevPageHandler = () => {
    props.onPrevPage(props.page, props.products);
  }

  return (
    <Products
      items={props.products}
      prevPage={prevPageHandler}
      nextPage={nextPageHandler}
      colorsAttr={color} />
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    page: state.products.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: (page, products) => dispatch(actions.fetchProducts(page, products)),
    onNextPage: (page, products) => dispatch(actions.productsNext(page, products)),
    onPrevPage: (page, products) => dispatch(actions.productsPrev(page, products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));