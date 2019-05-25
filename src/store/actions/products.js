import * as actionTypes from './actionTypes';

export const productsStart = () => {
  return {
    type: actionTypes.PRODUCTS_START
  }
}
export const productsSuccess = (page, productsData, count) => {
  return {
    type: actionTypes.PRODUCTS_SUCCESS,
    page: page,
    products: productsData,
    count: count
  }
}
export const productsFail = error => {
  return {
    type: actionTypes.PRODUCTS_FAIL,
    error: error
  }
}
export const fetchProducts = (page, productsData, count) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    page: page,
    products: productsData,
    count: count
  }
}
export const productsNextStart = () => {
  return {
    type: actionTypes.PRODUCTS_NEXT_START
  }
}
export const productsNextSuccess = (page, totalPage, productsData) => {
  return {
    type: actionTypes.PRODUCTS_NEXT_SUCCESS,
    page: page,
    totalPage: totalPage,
    products: productsData
  }
}
export const productsNextFail = error => {
  return {
    type: actionTypes.PRODUCTS_NEXT_FAIL,
    error: error
  }
}
export const productsNext = (page, totalPage, productsData) => {
  return {
    type: actionTypes.PRODUCTS_NEXT,
    page: page,
    totalPage: totalPage,
    products: productsData
  }
}
export const productsPrevStart = () => {
  return {
    type: actionTypes.PRODUCTS_PREV_START
  }
}
export const productsPrevSuccess = (page, productsData) => {
  return {
    type: actionTypes.PRODUCTS_PREV_SUCCESS,
    page: page,
    products: productsData
  }
}
export const productsPrevFail = error => {
  return {
    type: actionTypes.PRODUCTS_PREV_FAIL,
    error: error
  }
}
export const productsPrev = (page, productsData) => {
  return {
    type: actionTypes.PRODUCTS_PREV,
    page: page,
    products: productsData
  }
}
export const productsSearchStart = () => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_START
  }
}
export const productsSearchSuccess = (queryStr, allWords, page, limit, desLength, products) => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_SUCCESS,
    queryStr: queryStr,
    allWords: allWords,
    page: page,
    limit: limit,
    desLength: desLength,
    products: products
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
export const productDetailStart = () => {
  return {
    type: actionTypes.PRODUCT_DETAILS_START
  }
}
export const productDetailSuccess = (productId, productData) => {
  return {
    type: actionTypes.PRODUCT_DETAILS_SUCCESS,
    productId: productId,
    productData: productData
  }
}
export const productDetailFail = error => {
  return {
    type: actionTypes.PRODUCT_DETAILS_FAIL,
    error: error
  }
}
export const fetchProductDetail = (productId, productData) => {
  return {
    type: actionTypes.FETCH_PRODUCT_DETAIL,
    productId: productId,
    productData: productData
  }
}
export const fetchProductLocation = productId => {
  return {
    type: actionTypes.FETCH_PRODUCT_LOCATION,
    productId: productId
  }
}
export const productLocationStart = () => {
  return {
    type: actionTypes.PRODUCT_LOCATION_START
  }
}
export const productLocationSuccess = (productId, productLocation) => {
  return {
    type: actionTypes.PRODUCT_LOCATION_SUCCESS,
    productId: productId,
    productLocation: productLocation
  }
}
export const productLocationFail = error => {
  return {
    type: actionTypes.PRODUCT_LOCATION_FAIL,
    error: error
  }
}
export const productsInCategoryStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_START
  }
}
export const productsInCategorySuccess = (categoryId, products) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_SUCCESS,
    categoryId: categoryId,
    products: products
  }
}
export const productsInCategoryFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_FAIL,
    error: error
  }
}
export const productsInDepartmentStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_START
  }
} 
export const productsInDepartmentSuccess = (departmentId, products) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_SUCCESS,
    departmentId: departmentId,
    products: products
  }
}
export const productsInDepartmentFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const fetchReviews = productId => {
  return {
    type: actionTypes.FETCH_PRODUCT_REVIEWS,
    productId: productId
  }
}
export const fetchReviewsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_REVIEWS_START
  }
}
export const fetchReviewsSuccess = (productId, reviews, averageStars) => {
  return {
    type: actionTypes.FETCH_PRODUCT_REVIEWS_SUCCESS,
    productId: productId,
    reviews: reviews,
    averageStars: averageStars
  }
}
export const fetchReviewsFail = error => {
  return {
    type: actionTypes.FETCH_PRODUCT_REVIEWS_FAIL,
    error: error
  }
}
export const postReview = (productId, reviewData) => {
  return {
    productId: productId,
    reviewData: reviewData
  }
}
export const postReviewStart = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_START
  }
}
export const postReviewSuccess = (productId, reviewData) => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_SUCCESS,
    productId: productId,
    reviewData: reviewData
  }
}
export const postReviewFail = error => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_FAIL,
    error: error
  }
}