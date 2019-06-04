import { put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* generateCartIdSaga(action) {
  yield put(actions.shoppingCartGenerateIdStart());

  try {
    const response = yield Axios.get('/shoppingcart/generateUniqueId');
    yield localStorage.setItem('cart_id', JSON.stringify(response.data.cart_id));

    yield put(actions.shoppingCartGenerateIdSuccess(response.data.cart_id));
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartGenerateIdFail(error));
  }
}

export function* addProductToCartSaga(action) {
  yield put(actions.shoppingCartAddStart())

  try {
    const response = yield Axios.post('/shoppingcart/add', action.productData);
    
    yield put(actions.shoppingCartAddSuccess(response.data));
    yield put(actions.fetchShoppingCart());
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartAddFail(error));
  }
}

export function* fetchCartSaga(action) {
  yield put(actions.shoppingCartStart());

  try {
    const cart_id = yield JSON.parse(localStorage.getItem('cart_id'));
    const response = yield Axios.get(`/shoppingcart/${cart_id}`);
    console.log(response.data)
    yield put(actions.shoppingCartSuccess(response.data))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartFail(error));
  }
}

export function* fetchTotalAmountSaga(action) {
  try {
    const cart_id = yield JSON.parse(localStorage.getItem('cart_id'));
    const response = yield Axios.get(`/shoppingcart/totalAmount/${cart_id}`)

    yield put(actions.shoppingCartTotalSuccess(response.data.total_amount))
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartTotalFail(error))
  }
}

export function* updateProductCartSaga(action) {
  yield put(actions.shoppingCartUpdateStart());

  try {
    const response = yield Axios.put(`/shoppingcart/update/${action.itemId}`, action.productData)

    yield put(actions.shoppingCartUpdateProduct(response.data));
    yield put(actions.fetchShoppingCart());
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartUpdateFail(error))
  }
}

export function* removeProductCartSaga(action) {
  yield put(actions.shoppingCartRemoveProductStart())

  try {
    const response = yield Axios.delete(`/shoppingcart/removeProduct/${action.itemId}`)
    console.log(response);

    yield put(actions.shoppingCartRemoveProductSuccess(action.itemId))
    yield put(actions.fetchShoppingCart());
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartRemoveProductFail(error))
  }
}

export function* emptyCartSaga(action) {
  yield put(actions.shoppingCartDeleteStart())

  try {
    const response = yield Axios.delete(`/shoppingcart/empty/${action.cartId}`);
    
    yield call([localStorage, 'removeItem'], 'cart_id');
    yield put(actions.shoppingCartDeleteSuccess(response.data));
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartDeleteFail(error))
  }
}

export function* moveToCartSaga(action) {
  yield put(actions.shoppingCartMoveToCartStart())

  try {
    const response = yield Axios.get(`/shoppingcart/moveToCart/${action.itemId}`)
    console.log('MOVE TO CART SAGA RES: ', response);

    yield put(actions.shoppingCartMoveToCartSuccess())
    yield put(actions.fetchShoppingCart());
    yield put(actions.fetchFavorites());
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartMoveToCartFail(error))
  }
}

export function* saveForLaterSaga(action) {
  yield put(actions.shoppingCartSaveFavStart());

  try {
    const response = yield Axios.get(`/shoppingcart/saveForLater/${action.itemId}`);
    console.log('SAVE FOR LATER RES: ', response);
    
    yield put(actions.shoppingCartSaveFav());
    yield put(actions.fetchFavorites());
  } catch(error) {
    console.error(error);
    yield put(actions.shoppingCartSaveFavFail(error))
  }
}

export function* fetchSaveForLaterSaga(action) {
  yield put(actions.fetchSaveForLaterStart())

  try {
    const cart_id = yield JSON.parse(localStorage.getItem('cart_id'));
    const response = yield Axios.get(`/shoppingcart/getSaved/${cart_id}`);
    console.log('FETCHED SAVE FOR LATER SAGA: ', response);

    yield put(actions.fetchSaveForLaterSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(actions.fetchSaveForLaterFail(error));
  }
}