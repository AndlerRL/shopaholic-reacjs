import { connect } from 'react-redux';
import React, { useState } from 'react';

import { Loading } from '../../UI/Loading/Loading';
import IconF from '../../UI/Icons/IconF';
import Btn from '../../UI/Btn/Btn';
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@material-ui/core';

import css from './ProductsHot.css';

const ProductsHot = props => {
  const [isHover, setIsHover] = useState(false);
  const [isSize, setIsSize] = useState({
    size: ''
  });

  const heartHandler = () => {
    setIsHover(!isHover);
  }

  const handleChange = product => e => {
    setIsSize({
      [e.target.name]: e.target.value
    });
  }

  const colors = props.colorsAttr.map(color => (
    <div key={color.attribute_value_id}>
      <div style={{ backgroundColor: color.value}}></div>
    </div>
  ));

  const size = props.sizesAttr.map(size => (
    <MenuItem 
      key={size.attribute_value_id}
      value={size.value}>
      { size.value }
    </MenuItem>
  ))

  let fetchedProductsHot = null;

  if (props.isLoading)
    fetchedProductsHot = <Loading />;
  else 
    fetchedProductsHot = props.items.map(product => {
       if (product.discounted_price > 0) 
        return (
        <li
          className={css.Item}
          key={product.product_id}>
          <div className={css.Hover}>
            <h4>{ product.name }</h4>
            <p>USD $ { product.discounted_price > 0 ? product.discounted_price : product.price }</p>
          
            <div className={css.ActionsContainer}>
              <form className={css.Size}>
                <FormControl variant="outlined" className={css.SizeControl}>
                  <InputLabel
                    htmlFor="size-value" >
                    Size
                  </InputLabel>
                  <Select
                    value={isSize.size}
                    onChange={handleChange(product)}
                    input={
                      <OutlinedInput
                        labelWidth={80}
                        name="size"
                        id="size-value" />
                    }
                    inputProps={{
                      name: 'size'
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    { size }
                  </Select>
                </FormControl>
              </form>
              <Btn
                btnType="contained"
                btnColor="primary"
                value={product.product_id}
                clicked={() => props.productDetail(product)}>
                quick view
              </Btn>
            </div>
            <span 
              onMouseEnter={heartHandler}
              onMouseLeave={heartHandler}
              className={css.Heart}
              onClick={e => props.addFav(e, product.product_id)}>
              <IconF 
                type={isHover ? 'fas' : 'far'}
                icon="heart"
                size="2rem" />
              add to favorites
            </span>
          </div>
          <div style={{
            background: `url('https://backendapi.turing.com/images/products/${product.thumbnail}') no-repeat`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: '100%',
            height: '155px',
          }}>
          { product.discounted_price > 0 ? (
            <span className={css.Hot}>
              HOT
            </span>
          ) : null }
        </div>
        <h5>{product.name}</h5>
        <p className={ product.discounted_price > 0 ? css.Discount : null }>
          USD $ { product.price }
        </p>
        <p>
          { product.discounted_price > 0 ? `USD $ ${product.discounted_price}` : null}
        </p>
        <div className={css.Colors}>
          { colors }
        </div>
      </li>
      )
    });

  return (
    <React.Fragment>
      <h3 className={css.Title}>You may also like</h3>
      <div className={css.ProductsHot}>
        <ul className={css.ProductsContainer}>
          { fetchedProductsHot }
        </ul>
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading
  }
}

export default connect(mapStateToProps)(ProductsHot);