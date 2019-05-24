import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Btn from '../../UI/Btn/Btn';
import BtnIcon from '../../UI/Btn/BtnIcon';
import IconF from '../../UI/Icons/IconF';
import IconM from '../../UI/Icons/IconM';
import { Loading, LoadingText } from '../../UI/Loading/Loading';

import css from './Product.css'
import { Scope } from '@babel/traverse';

const ProductDetail = props => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {

  }, []);

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
  
  const attributesColor = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Color')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.attribute[attr.attribute_value] ? css.Selected : css.ColorItem}
          onClick={props.attributeSelect(attr.attribute_value, attr.attribute_value_id)}
          name={attr.attribute_value}>
          <div style={{ backgroundColor: attr.attribute_value}}></div>
        </button>
      )
  })

  const attributesSize = props.productAttributes.map(attr => {
    if (attr.attribute_name === 'Size')
      return (
        <button 
          key={attr.attribute_value_id}
          className={props.attribute[attr.attribute_value] ? css.Selected : css.SizeItem}
          onClick={props.attributeSelect(attr.attribute_value ,attr.attribute_value_id)}
          name={attr.attribute_value}>
          <span>{ attr.attribute_value }</span>
        </button>
      )
  })

  let product = null;

  if (props.isLoading)
    product = ( 
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
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
            <img src={`https://backendapi.turing.com/images/products/${ !animation ? product.image : product.image_2 }`}
              className={[
                css.ActiveImg,
                !animation ? css.In : null,
                animation ? css.Out : null
              ].join(' ')} 
              alt="Active_Image"/>
            <div className={[css.InactiveImg].join(' ')}>
              <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image : product.image_2 }`}
                className={css.ActiveImgThumb}
                alt="Active_Image_thumb" />
              <img src={`https://backendapi.turing.com/images/products/${!animation ? product.image_2 : product.image }`}
                onClick={changeImg}
                className={[
                  !animation ? css.FadeIn : null,
                  animation ? css.FadeOut : null
                ].join(' ')}
                alt="Inactive_Image" />
            </div>
          </div>

          <div className={css.ProductInfo}>
            <div className={css.ProductInfoHead}>
              { productLoc }
              <h2> { product.name } </h2>
              <span>stars comes here</span>
              <p> { product.description } </p>
              <div className={css.Price}>
                <span className={product.discounted_price !== 0 ? css.DiscountedPrice : null}> 
                  USD ${ product.price }
                </span>
                { product.discounted_price !== 0 ? (
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
            </div>
          </div>
        </div>
      )
    })

  return (
    <div className={css.ProductDetail}>
      { product }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading
  }
}

export default connect(mapStateToProps)(withRouter(ProductDetail));