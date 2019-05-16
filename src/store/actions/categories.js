import * as actionTypes from './actionTypes';

export const categoriesQueryStart = () => {
  return {
    type: actionTypes.CATEGORIES_QUERY_START
  }
}

export const categoriesQuerySuccess = (orderQuery, pageQuery, limitQuery) => {
  return {
    type: actionTypes.CATEGORIES_QUERY_SUCCESS,
    orderQuery: orderQuery,
    pageQuery: pageQuery,
    limitQuery: limitQuery
  }
}
export const categoriesQueryFail = error => {
  return {
    type:actionTypes.CATEGORIES_QUERY_FAIL,
    error: error
  }
}
export const categoriesStart = () => {
  return {
    type: actionTypes.CATEGORIES_START
  }
}
export const categoriesSuccess = catId => {
  return {
    type: actionTypes.CATEGORIES_SUCCESS,
    catId: catId
  }
}
export const categoriesFail = error => {
  return {
    type: actionTypes.CATEGORIES_FAIL,
    error: error
  }
}
export const categoriesInDepartmentStart = () => {
  return {
    type: actionTypes.CATEGORIES_IN_DEPARTMENT_START
  }
}
export const categoriesInDepartmentSuccess = depId => {
  return {
    type: actionTypes.CATEGORIES_IN_DEPARTMENT_SUCCESS,
    depId: depId
  }
}
export const categoriesInDepartmentFail = error => {
  return {
    type: actionTypes.CATEGORIES_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const categoriesInProductStart = () => {
  return {
    type: actionTypes.CATEGORIES_IN_PRODUCT_START
  }
}
export const categoriesInProductSuccess = productId => {
  return {
    type: actionTypes.CATEGORIES_IN_PRODUCT_SUCCESS,
    productId: productId
  }
}
export const categoriesInProductFail = error => {
  return {
    type: actionTypes.CATEGORIES_IN_DEPARTMENT_FAIL,
    error: error
  }
}