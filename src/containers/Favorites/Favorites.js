import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as actions from '../../store/actions';
import Favs from '../../components/Favorites/Favorites';
import Modal from '../../components/UI/Modal/Modal';

const Favorites = props => {
  useEffect(() => {
    props.onFetchFavorites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveToCartHandler = item => e => {
    e.preventDefault();

    props.onMoveToCart(item);
  }

  const favProducts = props.favorites.map(favs => favs);

  return (
    <Modal
      modalClosed={props.favoritesClosed}
      show={props.showFavorites}>
      <Favs 
        favorites={favProducts}
        backShop={props.favoritesClosed}
        moveToCart={moveToCartHandler} />
    </Modal>
  )
};

const mapStateToProps = state => {
  return {
    favorites: state.shoppingCart.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchFavorites: () => dispatch(actions.fetchFavorites()),
    onMoveToCart: itemId => dispatch(actions.moveToCart(itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);