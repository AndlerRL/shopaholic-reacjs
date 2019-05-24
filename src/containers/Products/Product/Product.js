import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import * as actions from '../../../store/actions';
import { updateObject } from '../../../share/utility';
import ProductDetail from '../../../components/Products/Product/Product';

const Item = props => {
  const [selected, setSelected] = useState(false);
  const [attribute, setAttribute] = useState({
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

  useEffect(() => {
    window.scroll(0, 0);
    const product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));
    
    props.onProductLocation(product_detail_id);
    props.onGetDetail(product_detail_id, props.productData);
    props.onProductAttributes(product_detail_id);

    if (product_detail_id === null) {
      props.history.replace('/products')
    }
  }, [])
  const productDetail = props.productData.map(product => product);
  const productLocation = props.productLocation.map(location => location);
  const goToHandler = location => () => {
    if (location === 'Home')
      props.history.push('/')

    if (location === 'Products')
      props.history.push('/products')
    
    if (location.name === 'Department') {
      localStorage.setItem('department_id', JSON.stringify(location.department_id))
      let department_id = JSON.parse(localStorage.getItem('department_id'))

      if (department_id !== location.department_id) {
        localStorage.setItem('department_id', JSON.stringify(location.department_id))
        department_id = JSON.parse(localStorage.getItem('department_id'))

        props.history.push('/departments')
      }
    }

    if (location.name === 'Category') {
      localStorage.setItem('category_id', JSON.stringify(location.category_id))
      let category_id = JSON.parse(localStorage.getItem('category_id'))

      if (category_id !== location.category_id) {
        localStorage.setItem('category_id', JSON.stringify(location.category_id))
        category_id = JSON.parse(localStorage.getItem('category_id'))

        props.history.push('/categories')
      }
    }
  }
  const productAttributes = props.productAttributes.map(attr => attr);
  const attrSelected = (attribute, id) => e => {
    console.log(attribute)
    console.log(id)
    setSelected(!selected)
    setAttribute({
      [attribute]: selected
    })
  }

  return (
    <ProductDetail 
      product={productDetail}
      productLoc={productLocation}
      goTo={goToHandler}
      attribute={attribute}
      attributeSelect={attrSelected}
      productAttributes={productAttributes} />
  )
};

const mapStateToProps = state => {
  return {
    productId: state.products.productId,
    productData: state.products.productData,
    productLocation: state.products.productLocation,
    productAttributes: state.attributes.productAttributes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetDetail: (productId, productDetail) => dispatch(actions.fetchProductDetail(productId, productDetail)),
    onProductLocation: productId => dispatch(actions.fetchProductLocation(productId)),
    onProductAttributes: productId => dispatch(actions.attributesInProduct(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item));