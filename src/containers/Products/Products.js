import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useEffect } from 'react';

import * as actions from '../../store/actions';
import Products from '../../components/Products/Products';

const Items = props => {
  useEffect(() => {
    props.onGetProducts(props.page, props.products, props.count);
    props.onGetAttributes(props.size, props.color);
    props.onAttributesValues(props.sizeVals, props.colorVals);
    props.onFetchCategories(props.categories);
  }, []);

  const nextPageHandler = () => {
    props.onNextPage(props.page, props.products);
    window.scroll(0, 430);
  }

  const prevPageHandler = () => {
    props.onPrevPage(props.page, props.products);
    window.scroll(0, 430);
  }

  const color = props.colorVals.map(color => color);
  const size = props.sizeVals.map(size => size);
  const filter = props.categories.map(filter => filter);

  console.log(props.categories, filter);

  return (
    <Products
      items={props.products}
      prevPage={prevPageHandler}
      nextPage={nextPageHandler}
      colorsAttr={color}
      sizesAttr={size}
      filter={filter}
      count={props.count} />
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    count: state.products.count,
    page: state.products.page,
    size: state.attributes.size,
    color: state.attributes.color,
    sizeVals: state.attributes.sizeVals,
    colorVals: state.attributes.colorVals,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: (page, products, count) => dispatch(actions.fetchProducts(page, products, count)),
    onNextPage: (page, products) => dispatch(actions.productsNext(page, products)),
    onPrevPage: (page, products) => dispatch(actions.productsPrev(page, products)),
    onGetAttributes: (size, color) => dispatch(actions.fetchAttributes(size, color)),
    onAttributesValues: (sizeVal, colVal) => dispatch(actions.attributeValues(sizeVal, colVal)),
    onFetchCategories: categories => dispatch(actions.fetchCategories(categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));