import * as actionTypes from './actionTypes';

export const goToShoppingCart = () => {
  return {
    type: actionTypes.GO_TO_SHOPPING_CART
  }
}
export const shoppingCartGenerateIdStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_GENERATE_ID_START
  }
}
export const shoppingCartGenerateIdSuccess = generatedId => {
  return {
    type: actionTypes.SHOPPING_CART_GENERATE_ID_SUCCESS,
    generatedId: generatedId
  }
}
export const shoppingCartGenerateIdFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_GENERATE_ID_FAIL,
    error: error
  }
}
export const generateCartId = () => {
  return {
    type: actionTypes.GENERATE_CART_ID
  }
}
export const shoppingCartAddStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_START
  }
}
export const shoppingCartAddSuccess = productData => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_SUCCESS,
    productData: productData
  }
}
export const shoppingCartAddFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_FAIL,
    error: error
  }
}
export const addProductToCart = productData => {
  return {
    type: actionTypes.ADD_PRODUCT_CART,
    productData: productData
  }
}
export const confirmAddCart = () => {
  return {
    type: actionTypes.SHOPPING_CART_CONFIRM_ADD
  }
}
export const fetchShoppingCart = cartId => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART,
    cartId: cartId
  }
}
export const shoppingCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_START
  }
}
export const shoppingCartSuccess = productData => {
  return {
    type: actionTypes.SHOPPING_CART_SUCCESS,
    productData: productData
  }
}
export const shoppingCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_FAIL,
    error: error
  }
}
export const updateProduct = (itemId, productData) => {
  return {
    type: actionTypes.PUT_UPDATE_PRODUCT,
    itemId: itemId,
    productData: productData
  }
}
export const shoppingCartUpdateStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_UPDATE_PRODUCT_START
  }
}
export const shoppingCartUpdateProduct = productData => {
  return {
    type: actionTypes.SHOPPING_CART_UPDATE_PRODUCT,
    productData: productData
  }
}
export const shoppingCartUpdateFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_UPDATE_PRODUCT_FAIL,
    error: error
  }
}
export const removeProduct = itemId => {
  return {
    type: actionTypes.SHOPPING_CART_REMOVE_PRODUCT,
    itemId: itemId
  }
}
export const shoppingCartRemoveProductStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_REMOVE_PRODUCT_START
  }
}
export const shoppingCartRemoveProductSuccess = itemId => {
  return {
    type: actionTypes.SHOPPING_CART_REMOVE_PRODUCT,
    productData: itemId
  }
}
export const shoppingCartRemoveProductFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_REMOVE_PRODUCT_FAIL,
    error: error
  }
}
export const moveToCart = itemId => {
  return {
    type: actionTypes.MOVE_TO_CART,
    productData: itemId
  }
}
export const shoppingCartMoveToCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_START
  }
}
export const shoppingCartMoveToCartSuccess = productData => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_SUCCESS,
    productData: productData
  }
}
export const shoppingCartMoveToCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_FAIL,
    error: error
  }
}
export const deleteShoppingCart = cartId => {
  return {
    type: actionTypes.DELETE_SHOPPING_CART,
    cartId: cartId
  }
}
export const shoppingCartDeleteStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_START
  }
}
export const shoppingCartDeleteSuccess = productData => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_SUCCESS,
    productData: productData
  }
}
export const shoppingCartDeleteFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_FAIL,
    error: error
  }
}
export const fetchTotalAmount = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART_TOTAL
  }
}
export const shoppingCartTotalSuccess = totalAmount => {
  return {
    type: actionTypes.SHOPPING_CART_TOTAL,
    totalAmount: totalAmount
  }
}
export const shoppingCartTotalFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_TOTAL_FAIL,
    error: error
  }
}
export const saveForLater = itemId => {
  return {
    type: actionTypes.SAVE_FOR_LATER,
    productData: itemId
  }
}
export const shoppingCartSaveFavStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_START
  }
}
export const shoppingCartSaveFav = productData => {
  return {
    type: actionTypes.SHOPPING_CART_SAVE_FAVORITE,
    favorites: productData
  }
}
export const shoppingCartSaveFavFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_SAVE_FAVORITE_FAIL,
    error: error
  }
}
export const fetchFavorites = cartId => {
  return {
    type: actionTypes.FETCH_SAVE_FAVORITE,
    cartId: cartId
  }
}
export const fetchShoppingCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_START
  }
}
export const fetchShoppingCartSuccess = favorites => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_SUCCESS,
    favorites: favorites
  }
}
export const fetchShoppingCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_FAIL,
    error: error
  }
}