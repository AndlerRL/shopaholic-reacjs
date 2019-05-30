import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import * as actions from '../../store/actions';
import Products from '../../components/Products/Products';

const Items = props => {
  const [colorAttributes, setColorAttributes] = useState({
    White: false,
    Black: false,
    Red: false,
    Orange: false,
    Yellow: false,
    Green: false,
    Blue: false,
    Indigo: false,
    Purple: false
  });
  const [sizeAttributes, setSizeAttributes] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false
  })
  const [priceRange, setPriceRange] = useState(0);

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

  const productDetailHandler = () => product => {
    localStorage.setItem('product_detail_id', JSON.stringify(product.product_id));
    let product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));

    if (product_detail_id !== product.product_id) {
      localStorage.setItem('product_detail_id', JSON.stringify(product.product_id))
      product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'))
    }

    props.onFetchProductData(product_detail_id, props.productData);
    props.history.push('/product-details');
  }

  const colorAttributeHandler = attribute => () => {
    setColorAttributes({
      [attribute]: !colorAttributes[attribute]
    })
  };

  const sizeAttributeHandler = attribute => () => {
    setSizeAttributes({
      [attribute]: !sizeAttributes[attribute]
    })
  }

  const sliderChangeHandler = (e, val) => {
    setPriceRange(val);
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
      productDetail={productDetailHandler(props.products)}
      colorsAttr={color}
      sizesAttr={size}
      colorAttribute={colorAttributes}
      sizeAttribute={sizeAttributes}
      colorSelect={colorAttributeHandler}
      sizeSelect={sizeAttributeHandler}
      filterCat={filterCat}
      filterDep={filterDep}
      count={props.count}
      sliderValue={priceRange}
      sliderChanged={sliderChangeHandler} />
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
    departments: state.departments.departments,
    productData: state.products.productData
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
    onFetchDepartments: departments => dispatch(actions.fetchDepartments(departments)),
    onFetchProductData: (productId, productData) => dispatch(actions.fetchProductDetail(productId, productData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Items));