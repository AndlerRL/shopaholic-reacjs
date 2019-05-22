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
    props.onFetchDepartments(props.departments);
  }, []);

  const nextPageHandler = () => {
    props.onNextPage(props.page, props.totalPage, props.products);
    window.scroll(0, 430);
  }

  const prevPageHandler = () => {
    props.onPrevPage(props.page, props.totalPage, props.products);
    window.scroll(0, 430);
  }

  const color = props.colorVals.map(color => color);
  const size = props.sizeVals.map(size => size);
  const filterCat = props.categories.map(filter => filter);
  const filterDep = props.departments.map(filter => filter);

  //console.log(props.departments)

  return (
    <Products
      items={props.products}
      prevPage={prevPageHandler}
      nextPage={nextPageHandler}
      colorsAttr={color}
      sizesAttr={size}
      filterCat={filterCat}
      filterDep={filterDep}
      count={props.count} />
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    count: state.products.meta.count,
    page: state.products.meta.page,
    totalPage: state.products.meta.totalPage,
    size: state.attributes.size,
    color: state.attributes.color,
    sizeVals: state.attributes.sizeVals,
    colorVals: state.attributes.colorVals,
    categories: state.categories.categories,
    departments: state.departments.departments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: (page, products, count) => dispatch(actions.fetchProducts(page, products, count)),
    onNextPage: (page, products) => dispatch(actions.productsNext(page, products)),
    onPrevPage: (page, products) => dispatch(actions.productsPrev(page, products)),
    onGetAttributes: (size, color) => dispatch(actions.fetchAttributes(size, color)),
    onAttributesValues: (sizeVal, colVal) => dispatch(actions.attributeValues(sizeVal, colVal)),
    onFetchCategories: categories => dispatch(actions.fetchCategories(categories)),
    onFetchDepartments: departments => dispatch(actions.fetchDepartments(departments))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));