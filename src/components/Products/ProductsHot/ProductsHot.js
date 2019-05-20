import { connect } from 'react-redux';
import React, { useState } from 'react';

import Loading from '../../UI/Loading/Loading';
import IconF from '../../UI/Icons/IconF';
import Btn from '../../UI/Btn/Btn';

import css from './ProductsHot.css';

const ProductsHot = props => {
  const [isHover, setIsHover] = useState(false);

  const heartHandler = () => {
    setIsHover(!isHover);
  }

  const colors = props.colorsAttr.map((color, key) => (
    <div key={key}>
      <div style={{ backgroundColor: color}}></div>
    </div>
  ));

  let fetchedProductsHot = null;

  if (props.isLoading)
    fetchedProductsHot = <Loading />;
  else 
    fetchedProductsHot = props.items.map(product => {
       if (product.discounted_price > 0) 
        return (
        <div
          className={css.Item}
          key={product.product_id}>
          <div class={css.Hover}>
            <h5>{ product.name }</h5>
            <p>USD $ { product.discounted_price > 0 ? product.discounted_price : product.price }</p>
          <span 
            onMouseEnter={heartHandler}
            onMouseLeave={heartHandler}
            onClick={e => props.addFav(e, product.product_id)}>
            <IconF 
              type={isHover ? 'fas' : 'far'}
              icon="heart"
              size="2.5rem" />
          </span>
          <Btn
            btnType="contained"
            btnColor="primary"
            clicked={e => props.productDetail(e, product.product_id)}>
            quick view
          </Btn>
        </div>
        <div style={{
          background: `url('https://backendapi.turing.com/images/products/${product.thumbnail}') no-repeat`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '100%',
          height: '175px',
        }}>
          { product.discounted_price > 0 ? (
            <span className={css.Hot}>
              HOT
            </span>
          ) : null}
        </div>
        <h6>{product.name}</h6>
        <div className={css.Colors}>
          { colors }
        </div>
        <p className={ product.discounted_price > 0 ? css.Discount : null }>
          USD $ { product.price }
        </p>
        <p>
          { product.discounted_price > 0 ? `USD $ ${product.discounted_price}` : null}
        </p>
      </div>
      )
    });

  return (
    <aside className={css.ProductsHot}>
      { fetchedProductsHot }
    </aside>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
    page: state.products.page
  }
}

export default connect(mapStateToProps)(ProductsHot);