import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  cartId: null,
  itemId: null,
  productId: null,
  attributes: '',
  shopping: false,
  quantity: 0,
  totalAmount: 0,
  favorites: []
}

const start = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    error: null
  })
};
const fail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: action.error
  })
};
const generateId = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    cartId: action.generatedId
  })
};
const addProductToCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    cartId: action.generatedId,
    productId: action.productId,
    attributes: action.attributes
  })
};
const fetchShoppingCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    cartId: action.generatedId
  })
};
const addItem = (state, action) => {
  const addItem = { [action.itemId]: state.itemId[action.quantity] + 1 };
  const updateItem = updateObject(state.quantity, addItem);
  const updateState = {
    quantity: updateItem,
    itemId: action.itemId,
    shopping: true
  }
  return updateObject(state, updateState);
};
const removeItem = (state, action) => {
  const removeItem = { [action.itemId]: state.itemId[action.quantity] - 1 };
  const updateItem = updateObject(state.quantity, removeItem);
  const updateState = {
    quantity: updateItem,
    itemId: action.itemId,
    shopping: true
  }
  return updateObject(state, updateState);
};
const deleteItem = (state, action) => {
  return updateObject(state, {
    itemId: action.itemId
  })
};
const emptyCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    cartId: action.generatedId
  })
};
const moveToCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    itemId: action.itemId
  })
};
const totalAmount = (state, action) => {
  return updateObject(state, {
    cartId: action.generatedId,
    totalAmount: action.totalAmount
  })
};
const saveToFav = (state, action) => {
  return updateObject(state, {
    itemId: action.itemId
  })
};
const fetchSaveToFav = (state, action) => {
  return updateObject(state, {
    cartId: action.generatedId,
    favorites: action.favorites
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SHOPPING_CART_GENERATE_ID_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_GENERATE_ID_SUCCESS:
      return generateId(state, action);
    case actionTypes.SHOPPING_CART_GENERATE_ID_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_ADD_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_ADD_SUCCESS:
      return addProductToCart(state, action);
    case actionTypes.SHOPPING_CART_ADD_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_SUCCESS:
      return fetchShoppingCart(state, action);
    case actionTypes.SHOPPING_CART_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_UPDATE_ADD:
      return addItem(state, action);
    case actionTypes.SHOPPING_CART_UPDATE_REMOVE:
      return removeItem(state, action);
    case actionTypes.SHOPPING_CART_REMOVE_PRODUCT:
      return deleteItem(state, action);
    case actionTypes.SHOPPING_CART_MOVE_TO_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_MOVE_TO_SUCCESS:
      return moveToCart(state, action);
    case actionTypes.SHOPPING_CART_MOVE_TO_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_DELETE_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_DELETE_SUCCESS:
      return emptyCart(state, action);
    case actionTypes.SHOPPING_CART_DELETE_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_TOTAL:
      return totalAmount(state, action);
    case actionTypes.SHOPPING_CART_TOTAL_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_SAVE_FAVORITE:
      return saveToFav(state, action);
    case actionTypes.SHOPPING_CART_SAVE_FAVORITE_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_SUCCESS:
      return fetchSaveToFav(state, action);
    case actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;