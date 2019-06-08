import { connect } from 'react-redux';
import React from 'react';

import Btn from '../UI/Btn/Btn';
import IconF from '../UI/Icons/IconF';

import css from './Favorites.css';

const favorites = props => {
  const favProducts = props.favorites.map(cart => (
    <tr className={css.Item}
      style={{
        opacity: props.remove ? 0 : 1
      }}
      key={cart.item_id}>
      <td>
        <div>
          <p>T-Shirt { cart.name } | Item #{ cart.item_id }</p>
          <span onClick={props.moveToCart(cart.item_id)} style={{cursor: 'pointer'}}>
            <IconF 
              color="inherit"
              type="far"
              icon="share-square"
              size="1rem" />
            Move to Cart
          </span>
        </div>
      </td>
      <td>
        <p>{cart.attributes} </p>
      </td>
      <td>
        <p>${ cart.price }</p>
      </td>
    </tr>
  ));

  return (
    <div className={[css.Favorites, props.deleted ? css.Deleted : null].join(' ')}>
      { props.favorites.length === 0 ? (
        <div className={css.NoItems}>
          <h3>No favorites items added!</h3>
          <p>If there is one, it should appear here.</p>
        </div>
      ) : (
        <h5>You have {props.favorites.length} favorite items!</h5>,
        <table>
          <thead>
            <tr>
              <th> Item </th>
              <th> Color & Size </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            { favProducts }
          </tbody>
        </table>
      )}

      <div className={css.Actions}>
        <Btn 
          btnType="contained"
          btnColor="secondary"
          clicked={props.backShop}>
          back to shop
        </Btn>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    isLoading: state.shoppingCart.isLoading,
  }
}

export default connect(mapStateToProps)(favorites);