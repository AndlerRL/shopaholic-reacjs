import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';

import * as actions from '../../../store/actions';
import { Loading, LoadingText, LoadingImg } from '../../UI/Loading/Loading';
import Btn from '../../UI/Btn/Btn';
import BtnIcon from '../../UI/Btn/BtnIcon';
import Stars from './Stars/Stars';
import Reviews from './Reviews/Reviews';
import SnackBar from '../../UI/Snackbar/Snackbar';
import HotProducts from '../ProductsHot/ProductsHot';

import css from './Product.css';

const ProductDetail = props => {
  const [animation, setAnimation] = useState(false);

  let productLoc = null

  if (props.isLoading)
    productLoc = <LoadingText />
  else 
    productLoc = props.productLoc.map(location => (
      <ul 
        className={css.Routes}
        key={'ProductLocation'}>
        <li>
          <span
            onClick={props.goTo('Home')}>
            Home 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo('Products')}>
            Products 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo({ name: 'Department', department_id: location.department_id })}>
            Department: {location.department_name} 
          </span>
        </li>
        <li>
          <span
            onClick={props.goTo({ name: 'Category', department_id: location.category_id })}>
            Category: {location.category_name} 
          </span>
        </li>
      </ul>
    ));
  
  // eslint-disable-next-line array-callback-return
  const attributesColor = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Color')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.colorAttribute[attr.attribute_value] ? css.Selected : css.ColorItem}
          onClick={props.attributeSelect(attr.attribute_value, attr.attribute_value_id)}
          name={attr.attribute_value}>
          <div style={{ backgroundColor: attr.attribute_value}}></div>
        </button>
      )
  })

  // eslint-disable-next-line array-callback-return
  const attributesSize = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Size')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.sizeAttribute[attr.attribute_value] ? css.Selected : css.SizeItem}
          onClick={props.attributeSelect(attr.attribute_value ,attr.attribute_value_id)}
          name={attr.attribute_value}>
          <span>{ attr.attribute_value }</span>
        </button>
      )
  })

  const snackbarHandler = (e, reason) => {
    if (reason === 'clickaway')
      return;

    props.onConfirmAdded();
  }

  let product = null;

  if (props.isLoading)
    product = ( 
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100vw - 64px)',
        transform: 'scale(1.5)'
      }}>
        <Loading />
      </div>
    )
  else
    product = props.product.map(product => {
      const changeImg = () => {
        setAnimation(!animation);
      }

      return (
        <div 
          key={product.product_id}
          className={css.ProductDetailHead}>
          <div className={css.ProductImg}>
            <div className={css.ImgContainer}>
              { props.isLoading ? 
                <LoadingImg /> :
                <img src={`https://backendapi.turing.com/images/products/${ !animation ? product.image : product.image_2 }`}
                  className={[
                    css.ActiveImg,
                    !animation ? css.In : null,
                    animation ? css.Out : null
                  ].join(' ')} 
                  alt="Active_Image"/>
              }
            </div>
            <div className={css.InactiveImg}>
              <div className={css.ImgContainer}>
                { props.isLoading ? 
                  <LoadingImg /> :
                  <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image : product.image_2 }`}
                    className={css.ActiveImgThumb}
                    alt="Active_Image_thumb" /> }
              </div>
              <div className={css.ImgContainer}>
                { props.isLoading ? 
                  <LoadingImg /> :
                  <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image_2 : product.image }`}
                    onClick={changeImg}
                    className={[
                      !animation ? css.FadeIn : null,
                      animation ? css.FadeOut : null
                    ].join(' ')}
                    alt="Inactive_Image" />
                }
              </div>
            </div>
          </div>

          <div className={css.ProductInfo}>
            <div className={css.ProductInfoHead}>
              { productLoc }
              <h2> { product.name } </h2>
              <Stars stars={props.averageStars.toFixed(2)}/>
              <p> { product.description } </p>
              <div className={css.Price}>
                <span className={product.discounted_price > 0 ? css.DiscountedPrice : null}> 
                  USD ${ product.price }
                </span>
                { product.discounted_price > 0 ? (
                  <span> USD ${ product.discounted_price } </span>
                ) : null }
              </div>
            </div>
            <div className={css.ProductInfoActions}>
              <div className={css.Attributes}>
                <span>Colors</span>
                <div className={css.Colors}>
                  { attributesColor }
                </div>
                <span>Sizes</span>
                <div className={css.Sizes}>
                  { attributesSize }
                </div> 
              </div>
              <div className={css.Actions}>
                <div className={css.AddCart}>
                  <Btn 
                    btnColor="primary"
                    btnType="contained"
                    size="large"
                    clicked={props.addCart}>
                    { props.shopLoading ? <LoadingText style={{
                          top: '-0.916666rem',
                          left: '-.91666rem'
                     }}/> : 'add to cart' }
                  </Btn>
                </div>
                <div className={css.AddFavorite}>
                  <BtnIcon
                    btnType={null}
                    iconType={props.addFav ? "fas" : "far"}
                    icon="heart"
                    iconSize="1.25rem"
                    iconColor="#ff1744"
                    clicked={props.addToFav}>
                    { props.shopLoading ? <LoadingText style={{
                          top: '-0.916666rem',
                          left: '-.91666rem'
                     }} /> : <span>{ props.addFav ? 'On Wish List!' : 'Add to Wish List' }</span> }
                  </BtnIcon>
                </div>
                <SnackBar 
                  open={props.isShopping}
                  closed={snackbarHandler}
                  success={true}
                  message="Product added to cart successfully!" />
                <SnackBar 
                  open={props.isFavorite}
                  closed={snackbarHandler}
                  success={true}
                  message="Product added to favorites successfully!" />
                <SnackBar 
                  open={props.openWarning}
                  closed={props.warning}
                  warning={true}
                  message="[Reminder] Select attributes before add to cart." />
              </div>
            </div>
          </div>
        </div>
      )
    });

  return (
    <React.Fragment>
      <div className={css.ProductDetail}>
        { product }
        <Reviews 
          reviews={props.reviews}
          review={props.review}
          rated={props.rated}
          rating={props.rating}
          btnDisabled={props.btnDisabled}
          submitReview={props.submitReview} />
      </div>
      <div className={css.ProductsHot}>
        <HotProducts
          colorsAttr={props.colorsAttr}
          sizesAttr={props.sizesAttr}
          productDetail={props.productDetail}
          addFav={props.addFav} />
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
    shopLoading: state.shoppingCart.isLoading,
    averageStars: state.products.averageStars,
    isShopping: state.shoppingCart.isShopping,
    isFavorite: state.shoppingCart.isFavorite
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onConfirmAdded: () => dispatch(actions.confirmAddCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetail));