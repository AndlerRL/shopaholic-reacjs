import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import * as actions from '../../store/actions';
import Axios from '../../axios-shop';
import Products from '../../components/Products/Products';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));

    props.onGetProducts(props.page, props.products, props.count);
    props.onGetAttributes(props.size, props.color);
    props.onAttributesValues(props.sizeVals, props.colorVals);
    props.onFetchCategories(props.categories);
    props.onFetchDepartments(props.departments);
    if (cart_id === null)
      props.onGenerateCartId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const color = props.colorVals.map(color => color);
  const size = props.sizeVals.map(size => size);
  const filterCat = props.categories.map(filter => filter);
  const filterDep = props.departments.map(filter => filter);

  let products = props.products;

  if (props.isDepartment)
    products = props.filterDepartment;

  if (props.isCategory)
    products = props.filterCategory;

  const nextPageHandler = () => {
    if (!props.isDepartment && !props.isCategory)
      props.onNextPage(props.page);

    if (props.isDepartment)
      props.onDepNextPage(props.page, props.departmentId);
      
    if (props.isCategory)
      props.onCatNextPage(props.page, props.categoryId);
    
    window.scroll(0, 430);

    if (window.innerWidth <= 500)
      window.scroll(0, 480);
  }

  const prevPageHandler = () => {
    if (!props.isDepartment && !props.isCategory)
      props.onPrevPage(props.page);

    if (props.isDepartment)
      props.onDepPrevPage(props.page, props.departmentId);
      
    if (props.isCategory)
      props.onCatPrevPage(props.page, props.categoryId);
    
    window.scroll(0, 430);

    if (window.innerWidth <= 500)
      window.scroll(0, 480);
  }

  const productDetailHandler = () => product => {
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    localStorage.setItem('product_detail_id', JSON.stringify(product.product_id));
    let product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));

    if (product_detail_id !== product.product_id) {
      localStorage.setItem('product_detail_id', JSON.stringify(product.product_id))
      product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'))
    }

    if (cart_id === null)
      props.onGenerateCartId();
      
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

  const filterCategoryHandler = name => e => {
    const id = filterCat.find(id => id.name === name).category_id;

    props.onFetchProductsInCategory(props.page, id);
  }

  const filterDepartmentHandler = name => e => {
    const id = filterDep.find(id => id.name === name).department_id;

    props.onFetchProductsInDepartment(props.page, id);
  }

  const clearFilterHandler = () => {
    if (props.hasValueDep.Regional || props.hasValueDep.Nature || props.hasValueDep.Seasonal) {
      props.clearFilter()
      setTimeout(() => {
        props.onGetProducts(props.page, props.products, props.count);
      }, 200);
    }

    if (props.hasValueCat.Animal || props.hasValueCat.Christmas || props.hasValueCat.Flower || props.hasValueCat.French ||
    props.hasValueCat.Irish || props.hasValueCat.Italian || props.hasValueCat["Valentine's"]) {
      props.clearFilter()
      setTimeout(() => {
        props.onGetProducts(props.page, props.products, props.count);
      }, 200);
    }

    if (props.queryStr) {
      props.clearFilter()
      setTimeout(() => {
        props.onGetProducts(props.page, props.products, props.count);
      }, 200);
    }
  }

  const addWishList = productId => {
    console.log(productId);
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    
    const attributes = `N/A`;
    props.onAddProduct(
      "Fav",
      cart_id,
      productId, 
      attributes
    );
  }

  let authRedirect = null;

  if (props.isAuthenticated && props.onCheckout)
    authRedirect = <Redirect to={props.authRedirectPath} />

  if (props.onCheckout && (props.match.path === "/checkout" || props.match.path === "/checkout/contact-data"))
    authRedirect = null;

  return (
    <React.Fragment>
      { authRedirect }
      <Products
        items={products}
        prevPage={prevPageHandler}
        nextPage={nextPageHandler}
        productDetail={productDetailHandler(props.products)}
        colorsAttr={color}
        sizesAttr={size}
        colorAttribute={colorAttributes}
        sizeAttribute={sizeAttributes}
        colorSelect={colorAttributeHandler}
        addFav={addWishList}
        favorites={props.favorites}
        sizeSelect={sizeAttributeHandler}
        filterCat={filterCat}
        filterDep={filterDep}
        count={props.count}
        sliderValue={priceRange}
        sliderChanged={sliderChangeHandler}
        filterDepartment={filterDepartmentHandler}
        filterCategory={filterCategoryHandler}
        clear={clearFilterHandler} />
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    filterDepartment: state.products.filterDepartment,
    filterCategory: state.products.filterCategory,
    count: state.products.meta.count,
    page: state.products.meta.page,
    totalPage: state.products.meta.totalPage,
    size: state.attributes.size,
    color: state.attributes.color,
    sizeVals: state.attributes.sizeVals,
    colorVals: state.attributes.colorVals,
    categories: state.categories.categories,
    departments: state.departments.departments,
    productData: state.products.productData,
    hasValueDep: state.departments.hasValue,
    hasValueCat: state.categories.hasValue,
    departmentId: state.departments.departmentId,
    categoryId: state.categories.categoryId,
    isDepartment: state.products.department,
    isCategory: state.products.category,
    queryStr: state.products.meta.query_string,
    authRedirectPath: state.auth.authRedirectPath,
    onCheckout: state.orders.onCheckout,
    isAuthenticated: state.auth.token !== null,
    favorites: state.shoppingCart.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: (page, products, count) => dispatch(actions.fetchProducts(page, products, count)),
    onNextPage: page => dispatch(actions.productsNext(page)),
    onPrevPage: page => dispatch(actions.productsPrev(page)),
    onDepNextPage: (page, departmentId) => dispatch(actions.productsDeptNext(page, departmentId)),
    onDepPrevPage: (page, departmentId) => dispatch(actions.productsDeptPrev(page, departmentId)),
    onCatNextPage: (page, categoryId) => dispatch(actions.productsCatNext(page, categoryId)),
    onCatPrevPage: (page, categoryId) => dispatch(actions.productsCatPrev(page, categoryId)),
    onGetAttributes: (size, color) => dispatch(actions.fetchAttributes(size, color)),
    onAttributesValues: (sizeVal, colVal) => dispatch(actions.attributeValues(sizeVal, colVal)),
    onFetchCategories: categories => dispatch(actions.fetchCategories(categories)),
    onFetchDepartments: departments => dispatch(actions.fetchDepartments(departments)),
    onFetchProductData: (productId, productData) => dispatch(actions.fetchProductDetail(productId, productData)),
    onFetchProductsInDepartment: (page, departmentId) => dispatch(actions.fetchProductsInDepartment(page, departmentId)),
    onFetchProductsInCategory: (page, departmentId) => dispatch(actions.fetchProductsInCategory(page, departmentId)),
    onGenerateCartId: () => dispatch(actions.generateCartId()),
    clearFilter: () => dispatch(actions.clearFilter()),
    onAddProduct: (direction, cart_id, product_id, attributes) => dispatch(actions.addProductToCart(direction, cart_id, product_id, attributes)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(withErrorHandler(Items, Axios))));