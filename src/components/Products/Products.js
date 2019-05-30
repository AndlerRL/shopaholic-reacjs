import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

import * as actions from '../../store/actions';
import Btn from '../UI/Btn/Btn';
import BtnIcon from '../UI/Btn/BtnIcon';
import { Loading } from '../UI/Loading/Loading';
import IconF from '../UI/Icons/IconF';
import ProductsHeader from './ProductsHeader/ProductsHeader';
import ProductsFooter from './ProductsFooter/ProductsFooter';
import ProductsHot from './ProductsHot/ProductsHot';
import Filter from './Filter/Filter';

import css from './Products.css';

const Products = props => {
  const [isHover, setIsHover] = useState(false);

  const heartHandler = () => {
    setIsHover(!isHover);
  }

  const colors = props.colorsAttr.map(color => (
    <div key={color.attribute_value_id}>
      <div style={{ backgroundColor: color.value}}></div>
    </div>
  ));

  let fetchedProducts = null;

  if (props.isLoading)
    fetchedProducts = <Loading />;
  else 
      fetchedProducts = props.items.map(product => {
        if (product.price >= props.sliderValue || product.discounted_price >= props.sliderValue)
          return (
          <div
            className={css.Item}
            key={product.product_id}>
            <div className={css.Hover}>
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
                clicked={() => props.productDetail(product)}>
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
    <div className={css.Products}>
      <ProductsHeader />

      <div className={css.ProductsMain}>
        <aside className={css.Filter}>
          <Filter 
            filterCat={props.filterCat}
            filterDep={props.filterDep}
            colorsAttr={props.colorsAttr}
            sizesAttr={props.sizesAttr}
            colorAttribute={props.colorAttribute}
            sizeAttribute={props.sizeAttribute}
            sizeSelect={props.sizeSelect}
            colorSelect={props.colorSelect}
            count={props.count}
            sliderValue={props.sliderValue}
            sliderChanged={props.sliderChanged} />
        </aside>
        <div className={css.ProductsItems}>
          { fetchedProducts }
        </div>
      </div>
      <ul className={css.Pagination}>
        <BtnIcon 
          iconType="fas"
          iconSize="2rem"
          icon="arrow-left"
          btnColor="pagination"
          clicked={props.prevPage}
          disabled={props.page <= 1}>
        </BtnIcon>
        <div>
          <li>
            { props.page > 3 ? `... ` : null }
            { props.page > 2 ? `${parseInt(props.page) - 2}` : null }
          </li>
          <li> 
            { props.page > 1 ? `${parseInt(props.page) - 1}` : null }
          </li>
          <li className={css.Active}>
            { props.page }
          </li>
          <li>
            { props.page !== props.totalPage ? `${parseInt(props.page) + 1}` : null }
          </li>
          <li>
            { props.page < (props.totalPage - 1) ? `${parseInt(props.page) + 2}` : null }
            { props.page < (props.totalPage - 2) ? ' ... ' : null }
          </li>
        </div>
        <BtnIcon 
          iconType="fas"
          iconSize="2rem"
          icon="arrow-right"
          btnColor="pagination"
          clicked={props.nextPage}
          disabled={props.page === props.totalPage}>
        </BtnIcon>
      </ul>
      <ProductsHot 
        productDetail={props.productDetail}
        addFav={props.addFav}
        colorsAttr={props.colorsAttr}
        sizesAttr={props.sizesAttr} />
      <ProductsFooter />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
    page: state.products.meta.page,
    totalPage: state.products.meta.totalPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAttributes: (size, color) => dispatch(actions.fetchAttributes(size, color)),
    onAttributesValues: (sizeVal, colVal) => dispatch(actions.attributeValues(sizeVal, colVal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);