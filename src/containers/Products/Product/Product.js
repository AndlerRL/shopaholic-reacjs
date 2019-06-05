import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import * as actions from '../../../store/actions';
import { updateObject, checkValidity } from '../../../share/utility';
import Input from '../../../components/UI/Form/Input/Input';
import ProductDetail from '../../../components/Products/Product/Product';
//import Snackbar from '../../../components/UI/Snackbar/Snackbar';

const cart_id = JSON.parse(localStorage.getItem('cart_id'));

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
  const [productAttr, setProductAttr] = useState({
    Color: "",
    Size: ""
  });
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState({
    review: {
      elementType: 'textarea',
      elementConfig: {
        type: 'textarea',
        placeholder: 'Review must be at least 50 characters.'
      },
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 50
      }
    }
  })
  const [reviewIsValid, setReviewIsValid] = useState(false);
  const [rating, setRating] = useState(0);
  const [warning, setWarning] = useState(false);
  const product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));

  useEffect(() => {
    window.scroll(0, 0);
    
    props.onProductLocation(product_detail_id);
    props.onGetDetail(product_detail_id, props.productDetail);
    props.onProductAttributes(product_detail_id);
    props.onFetchReviews(product_detail_id);

    if (product_detail_id === null)
      props.history.replace('/products')

    if (cart_id === "")
      props.onGenerateCartId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

      setProductAttr({
        ...productAttr,
        Color: attribute
      })
    }

    if (attribute === 'S' || attribute === 'M' || attribute === 'L' ||
    attribute === 'XL' || attribute === 'XXL') {
      setSizeAttributes({
        [attribute]: !sizeAttributes[attribute]
      })

      setProductAttr({
        ...productAttr,
        Size: attribute
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

  const inputChangedHandler = (e, inputId) => {
    let reviewIsValid = true;
    const updatedFormEle = updateObject(review[inputId], {
      value: e.target.value,
      validation: {...review[inputId].validation,
        valid: checkValidity(e.target.value, review[inputId].validation),
        touched: true
      }
    })
    const updatedReviewForm = updateObject(review, {
      [inputId]: updatedFormEle
    })

    for (let inputIds in updatedReviewForm)
      reviewIsValid = updatedReviewForm[inputIds].validation.valid && reviewIsValid;

    setReview(updatedReviewForm);
    setReviewIsValid(reviewIsValid);
  }

  const ratingProduct = rating => () => {
    setRating(rating);
  }

  const addCartHandler = () => {
    if (cart_id) {
      if (productAttr.Color === "" || productAttr.Size === "") {
        setWarning(true)
      } else {
        props.onAddProduct(
          "Cart",
          cart_id,
          props.productId, 
          `${productAttr.Color}, ${productAttr.Size}`
        );
      }
    }
  }

  const addWishList = () => {
    if (productAttr.Color !== "" || productAttr.Size !== "") {
      const attributes = `${productAttr.Color}, ${productAttr.Size}`;
      props.onAddProduct(
        "Fav",
        cart_id,
        props.productId, 
        attributes
      );
    }
  }

  const postReviewHandler = e => {
    e.preventDefault();

    if (props.isAuthenticated) {
      props.onPostReview(props.productId, review.review.value, rating);
    }

    if (!props.isAuthenticated) {
      props.onSignIn();

      if (props.isSignUp)
        props.onSignUp();
    }
  }

  const warningHandler = (e, reason) => {
    if (reason === 'clickaway')
      return;

    setWarning(false);
  }

  const productDetailHandler = () => product => {
    localStorage.setItem('product_detail_id', JSON.stringify(product.product_id));
    let product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'));

    if (product_detail_id !== product.product_id) {
      localStorage.setItem('product_detail_id', JSON.stringify(product.product_id))
      product_detail_id = JSON.parse(localStorage.getItem('product_detail_id'))
    }

    window.scroll(0, 0);
    props.onFetchProductData(product_detail_id, props.productData);
    props.onProductLocation(product_detail_id);
    props.onGetDetail(product_detail_id, props.productDetail);
    props.onProductAttributes(product_detail_id);
    props.onFetchReviews(product_detail_id);
    props.history.push('/product-details');
  }

  const form = [];

  for (let key in review) {
    form.push({
      id: key,
      config: review[key]
    })
  }

  const textarea = form.map(formEle => (
    <Input 
      invalid={!formEle.config.validation.valid}
      shouldValidate={formEle.config.validation}
      touched={formEle.config.validation.touched}
      key={formEle.id}
      elementType={formEle.config.elementType}
      elementConfig={formEle.config.elementConfig}
      value={formEle.config.value}
      for={formEle.id}
      changed={e => inputChangedHandler(e, formEle.id)}
    />
  ))

  const color = props.colorVals.map(color => color);
  const size = props.sizeVals.map(size => size);

  let authRedirect = null;

  if (props.isAuthenticated && props.onCheckout)
    authRedirect = <Redirect to={props.authRedirectPath} />

  if (props.onCheckout && (props.match.path === "/checkout" || props.match.path === "/checkout/contact-data"))
    authRedirect = null;

  return (
    <React.Fragment>
    { authRedirect }
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
      addCart={addCartHandler}
      addFav={props.isFavorite}
      addToFav={addWishList}
      reviews={fetchReviews}
      review={textarea}
      rating={ratingProduct}
      rated={rating}
      btnDisabled={!reviewIsValid}
      form="Form"
      submitReview={postReviewHandler}
      openWarning={warning}
      warning={warningHandler}
      colorsAttr={color}
      sizesAttr={size}
      productDetail={productDetailHandler(props.products)} />
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    reviews: state.products.reviews,
    productId: state.products.productId,
    productData: state.products.productData,
    productLocation: state.products.productLocation,
    productAttributes: state.attributes.productAttributes,
    colorVals: state.attributes.colorVals,
    sizeVals: state.attributes.sizeVals,
    itemId: state.shoppingCart.itemId,
    isFavorite: state.shoppingCart.isFavorite,
    isShopping: state.shoppingCart.isShopping,
    isAuthenticated: state.auth.token !== null,
    onCheckout: state.orders.onCheckout,
    authRedirectPath: state.auth.authRedirectPath,
    isSignIn: state.auth.isSignIn,
    isSignUp: state.auth.isSignUp,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetDetail: (productId, productDetail) => dispatch(actions.fetchProductDetail(productId, productDetail)),
    onProductLocation: productId => dispatch(actions.fetchProductLocation(productId)),
    onProductAttributes: productId => dispatch(actions.attributesInProduct(productId)),
    onFetchReviews: productId => dispatch(actions.fetchReviews(productId)),
    onGenerateCartId: () => dispatch(actions.generateCartId()),
    onAddProduct: (direction, cart_id, product_id, attributes) => dispatch(actions.addProductToCart(direction, cart_id, product_id, attributes)),
    onSaveForLater: () => dispatch(actions.saveForLater()),
    onMoveToCart: itemId => dispatch(actions.moveToCart(itemId)),
    onSignIn: () => dispatch(actions.goToSignIn()),
    onSignUp: () => dispatch(actions.goToSignUp()),
    onFetchProductData: (productId, productData) => dispatch(actions.fetchProductDetail(productId, productData)),
    onPostReview: (productId, review, rating) => dispatch(actions.postReview(productId, review, rating)),
    onFetchShoppingCart: () => dispatch(actions.fetchShoppingCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item));