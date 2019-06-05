import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isShoppingCart: false,
  isLoading: null,
  error: null,
  isShopping: false,
  isDeleted: false,
  isCartDeleted: false,
  isFavorite: false,
  onFavorite: false,
  quantity: 1,
  totalAmount: 0,
  itemId: null,
  favorites: [],
  productData: [],
  cart: []
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
    isShopping: null,
    isFavorite: null,
    error: action.error
  })
};
const goToShoppingCart = (state, action) => {
  return updateObject(state, {
    isShoppingCart: !state.isShoppingCart
  })
}
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
    productData: action.productData,
    itemId: action.itemId
  })
};
const confirmAddedProduct = (state, action) => {
  return updateObject(state, {
    isShopping: false,
    isFavorite: false
  })
}
const fetchShoppingCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    cart: action.productData
  })
};
const shoppingCartUpdateProduct = (state, action) => {
  return updateObject(state, {
    isDeleted: false,
    productData: action.productData
  })
}
const deleteItem = (state, action) => {
  return updateObject(state, {
    isDeleted: true,
    productData: state.productData.filter(id => id.item_id !== action.itemId)
  });
};
const emptyCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    isCartDeleted: true,
    productData: action.productData
  })
};
const moveToCart = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    isShopping: true,
    itemId: action.itemId
  })
};
const totalAmount = (state, action) => {
  return updateObject(state, {
    totalAmount: action.totalAmount
  })
};
const saveToFav = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    isFavorite: !state.isFavorite
  })
};
const fetchSaveToFav = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    favorites: action.favorites
  })
}
const goToFavorite = (state, action) => {
  return updateObject(state, {
    onFavorite: !state.onFavorite
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GO_TO_SHOPPING_CART:
      return goToShoppingCart(state, action);
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
    case actionTypes.SHOPPING_CART_CONFIRM_ADD:
      return confirmAddedProduct(state, action);
    case actionTypes.SHOPPING_CART_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_SUCCESS:
      return fetchShoppingCart(state, action);
    case actionTypes.SHOPPING_CART_FAIL:
      return fail(state, action);
    case actionTypes.SHOPPING_CART_UPDATE_PRODUCT_START:
      return start(state, action);
    case actionTypes.SHOPPING_CART_UPDATE_PRODUCT:
      return shoppingCartUpdateProduct(state, action);
    case actionTypes.SHOPPING_CART_UPDATE_PRODUCT_FAIL:
      return fail(state, action);
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
    case actionTypes.SHOPPING_CART_SAVE_FAVORITE_START:
      return start(state, action);
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
    case actionTypes.GO_TO_FAVORITES:
      return goToFavorite(state, action);
    default:
      return state;
  }
};

export default reducer;