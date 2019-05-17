import * as actionTypes from './actionTypes';

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
export const shoppingCartAddStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_START
  }
}
export const shoppingCartAddSuccess = (generatedId, productId, attributes) => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_SUCCESS,
    generatedId: generatedId,
    productId: productId,
    attributes: attributes
  }
}
export const shoppingCartAddFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_ADD_FAIL,
    error: error
  }
}
export const shoppingCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_START
  }
}
export const shoppingCartSuccess = generatedId => {
  return {
    type: actionTypes.SHOPPING_CART_SUCCESS,
    generatedId: generatedId
  }
}
export const shoppingCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_FAIL,
    error: error
  }
}
export const shoppingCartUpdateAdd = (itemId, quantity) => {
  return {
    type: actionTypes.SHOPPING_CART_UPDATE_ADD,
    itemId: itemId,
    quantity: quantity
  }
}
export const shoppingCartUpdateRemove = (itemId, quantity) => {
  return {
    type: actionTypes.SHOPPING_CART_UPDATE_REMOVE,
    itemId: itemId,
    quantity: quantity
  }
}
export const shoppingCartRemoveProduct = generatedId => {
  return {
    type: actionTypes.SHOPPING_CART_REMOVE_PRODUCT,
    generatedId: generatedId
  }
}
export const shoppingCartMoveToCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_START
  }
}
export const shoppingCartMoveToCartSuccess = itemId => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_SUCCESS,
    itemId: itemId
  }
}
export const shoppingCartMoveToCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_MOVE_TO_FAIL,
    error: error
  }
}
export const shoppingCartDeleteStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_START
  }
}
export const shoppingCartDeleteSuccess = generatedId => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_SUCCESS,
    generatedId: generatedId
  }
}
export const shoppingCartDeleteFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_DELETE_FAIL,
    error: error
  }
}
export const shoppingCartTotalSuccess = (totalAmount, generatedId) => {
  return {
    type: actionTypes.SHOPPING_CART_TOTAL,
    totalAmount: totalAmount,
    generatedId: generatedId
  }
}
export const shoppingCartTotalFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_TOTAL_FAIL,
    error: error
  }
}
export const shoppingCartSaveFav = itemId => {
  return {
    type: actionTypes.SHOPPING_CART_SAVE_FAVORITE,
    itemId: itemId
  }
}
export const shoppingCartSaveFavFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_SAVE_FAVORITE_FAIL,
    error: error
  }
}
export const fetchShoppingCartStart = () => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_START
  }
}
export const fetchShoppingCartSuccess = generatedId => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_SUCCESS,
    generatedId: generatedId
  }
}
export const fetchShoppingCartFail = error => {
  return {
    type: actionTypes.SHOPPING_CART_FETCH_SAVE_FAVORITE_FAIL,
    error: error
  }
}