import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import * as actions from '../../../store/actions';
import { updateObject } from '../../../share/utility';
import ProductDetail from '../../../components/Products/Product/Product';

const Item = props => {
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
  const [quantity, setQuantity] = useState(0);
  const [addFav, setAddFav] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    const product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));
    
    props.onProductLocation(product_detail_id);
    props.onGetDetail(product_detail_id, props.productData);
    props.onProductAttributes(product_detail_id);
    props.onFetchReviews(product_detail_id);

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
  const attrSelected = (attribute, id) => () => {
    if (attribute === 'White' || attribute === 'Black' || attribute === 'Red' ||
    attribute === 'Orange' || attribute === 'Yellow' || attribute === 'Green' || 
    attribute === 'Blue' || attribute === 'Purple' || attribute === 'Indigo') {
      setColorAttributes({
        [attribute]: !colorAttributes[attribute]
      })
    }

    if (attribute === 'S' || attribute === 'M' || attribute === 'L' ||
    attribute === 'XL' || attribute === 'XXL') {
      setSizeAttributes({
        [attribute]: !sizeAttributes[attribute]
      })
    }
  }
  const quantityAction = count => () => {
    if (count === 'Add')
      setQuantity(quantity + 1);
    if (count === 'Reduce')
      setQuantity(quantity - 1);
  }
  const fetchReviews = props.reviews.map(reviews => reviews);
  const addWishList = () => {
    setAddFav(!addFav);
  }

  return (
    <ProductDetail 
      product={productDetail}
      productLoc={productLocation}
      goTo={goToHandler}
      colorAttribute={colorAttributes}
      sizeAttribute={sizeAttributes}
      attributeSelect={attrSelected}
      productAttributes={productAttributes}
      quantity={quantityAction}
      count={quantity}
      addFav={addFav}
      addToFav={addWishList}
      reviews={fetchReviews} />
  )
};

const mapStateToProps = state => {
  return {
    reviews: state.products.reviews,
    productId: state.products.productId,
    productData: state.products.productData,
    productLocation: state.products.productLocation,
    productAttributes: state.attributes.productAttributes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetDetail: (productId, productDetail) => dispatch(actions.fetchProductDetail(productId, productDetail)),
    onProductLocation: productId => dispatch(actions.fetchProductLocation(productId)),
    onProductAttributes: productId => dispatch(actions.attributesInProduct(productId)),
    onFetchReviews: productId => dispatch(actions.fetchReviews(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item));