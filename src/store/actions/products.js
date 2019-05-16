import * as actionTypes from './actionTypes';

export const productsStart = () => {
  return {
    type: actionTypes.PRODUCTS_START
  }
}
export const productsSuccess = (pageQuery, limitQuery, desLengthQuery) => {
  return {
    type: actionTypes.PRODUCTS_SUCCESS,
    pageQuery: pageQuery,
    limitQuery: limitQuery,
    desLengthQuery: desLengthQuery
  }
}
export const productsFail = error => {
  return {
    type: actionTypes.PRODUCTS_FAIL,
    error: error
  }
}
export const productsNext = (pageQuery, limitQuery, desLengthQuery) => {
  return {
    type: actionTypes.PRODUCTS_NEXT,
    pageQuery: pageQuery,
    limitQuery: limitQuery,
    desLengthQuery: desLengthQuery
  }
}
export const productsNextFail = error => {
  return {
    type: actionTypes.PRODUCTS_NEXT_FAIL,
    error: error
  }
}
export const productsSearchStart = () => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_START
  }
}
export const productsSearchSuccess = (queryStr, allWords, page, limit, desLength) => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_SUCCESS,
    queryStr: queryStr,
    allWords: allWords,
    page: page,
    limit: limit,
    desLength: desLength
  }
}
export const productsSearchFail = error => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_FAIL,
    error: error
  }
}
export const productsIdStart = () => {
  return {
    type: actionTypes.PRODUCTS_ID_START
  }
}
export const productsIdSuccess = productId => {
  return {
    type: actionTypes.PRODUCTS_ID_SUCCESS,
    productId: productId
  }
}
export const productsIdFail = error => {
  return {
    type: actionTypes.PRODUCTS_ID_FAIL,
    error: error
  }
}
export const productsIdDetailStart = () => {
  return {
    type: actionTypes.PRODUCTS_ID_DETAILS_START
  }
}
export const productsIdDetailSuccess = productId => {
  return {
    type: actionTypes.PRODUCTS_ID_DETAILS_SUCCESS,
    productId: productId
  }
}
export const productsIdDetailFail = error => {
  return {
    type: actionTypes.PRODUCTS_ID_DETAILS_FAIL,
    error: error
  }
}
export const productsIdLocationsStart = () => {
  return {
    type: actionTypes.PRODUCTS_ID_LOCATIONS_START
  }
}
export const productsIdLocationsSuccess = productId => {
  return {
    type: actionTypes.PRODUCTS_ID_LOCATIONS_SUCCESS,
    productId: productId
  }
}
export const productsIdLocationsFail = error => {
  return {
    type: actionTypes.PRODUCTS_ID_LOCATIONS_FAIL,
    error: error
  }
}