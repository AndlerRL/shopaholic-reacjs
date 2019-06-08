import { connect } from 'react-redux';
import React from 'react';

import Btn from '../UI/Btn/Btn';
import BtnIcon from '../UI/Btn/BtnIcon';
import IconM from '../UI/Icons/IconM';
import { LoadingImg, LoadingText } from '../UI/Loading/Loading';

import css from './ShoppingCart.css';

const shoppingCart = props => {
  const cartProducts = props.shoppingCart.map(cart => (
    <tr className={css.Item}
      style={{
        opacity: props.remove ? 0 : 1
      }}
      key={cart.item_id}>
      <td>
        <div>
          { props.isLoading ? 
            <LoadingImg /> :
            <img src={`https://backendapi.turing.com/images/products/${cart.image}`} alt={cart.image} /> 
          }
        </div>
        <div>
          <p>T-Shirt { cart.name }</p>
          <p>Item #{ cart.item_id }</p>
          <span onClick={props.removeProduct(cart.item_id)} style={{cursor: 'pointer'}}>
            <IconM 
              color="inherit"
              icon="close"
              size="small" />
            Remove
          </span>
        </div>
      </td>
      <td>
        <p>{cart.attributes} </p>
      </td>
      <td>
        <div className={css.Quantity}>
          <div className={css.QuantityContainer}>
            <div>
              <BtnIcon 
                iconType="fas"
                icon="minus"
                btnType="contained"
                btnColor="secondary"
                size="small"
                iconSize="1.5rem"
                disabled={cart.quantity === 1}
                clicked={props.updateProduct({
                  id: cart.item_id,
                  quantity: cart.quantity - 1
                })} />
            </div>
            <span>{ props.isLoading ? 
              <LoadingText style={{
                marginTop: '-1.3rem', 
                marginLeft: '-.83rem',
                transform: 'scale(.65)' }} /> :
              cart.quantity }</span>
            <div>
              <BtnIcon 
                iconType="fas"
                icon="plus"
                btnType="contained"
                btnColor="secondary"
                size="small"
                iconSize="1.5rem"
                clicked={props.updateProduct({
                  id: cart.item_id,
                  quantity: cart.quantity + 1
                })} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p>${ cart.price }</p>
      </td>
    </tr>
  ));

  return (
    <div className={[css.ShoppingCart, props.deleted ? css.Deleted : null].join(' ')}>
      { props.shoppingCart.length === 0 ? (
        <div className={css.NoItems}>
          <h3>No items added on your cart!</h3>
          <p>If there is one, it should appear here.</p>
        </div>
      ) : (
        <h5>{props.shoppingCart.length} items in your cart!</h5>,
        <table>
          <thead>
            <tr>
              <th> Item </th>
              <th> Color & Size </th>
              <th> Quantity </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            { cartProducts }
          </tbody>
          <tfoot>
            <tr>
              <td>
                <BtnIcon
                  btnType={null}
                  icon="times"
                  iconType="fas"
                  iconSize="1rem"
                  clicked={props.deleteCart}>
                  Delete Cart
                </BtnIcon>                
              </td>
              <td>
                Total in Cart: USD ${ props.totalAmount }
              </td>
            </tr>
          </tfoot>
        </table>
      )}

      <div className={css.Actions}>
        <Btn 
          btnType="contained"
          btnColor="secondary"
          clicked={props.backShop}>
          back to shop
        </Btn>
        <Btn 
          btnType="contained"
          btnColor="primary"
          disabled={props.shoppingCart.length === 0}
          clicked={props.checkout}>
          { props.inAuthenticated ? 'checkout' : 'login to continue shopping' }
        </Btn>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.shoppingCart.isLoading,
    isDeleted: state.shoppingCart.isDeleted,
    inAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(shoppingCart);