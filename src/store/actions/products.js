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
export const fetchProducts = page => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    page: page
  }
}
export const productsNextStart = () => {
  return {
    type: actionTypes.PRODUCTS_NEXT_START
  }
}
export const productsNextSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_NEXT_SUCCESS,
    page: page,
    products: productData
  }
}
export const productsNextFail = error => {
  return {
    type: actionTypes.PRODUCTS_NEXT_FAIL,
    error: error
  }
}
export const productsNext = page => {
  return {
    type: actionTypes.PRODUCTS_NEXT,
    page: page
  }
}
export const productsPrevStart = () => {
  return {
    type: actionTypes.PRODUCTS_PREV_START
  }
}
export const productsPrevSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_PREV_SUCCESS,
    page: page,
    products: productData
  }
}
export const productsPrevFail = error => {
  return {
    type: actionTypes.PRODUCTS_PREV_FAIL,
    error: error
  }
}
export const productsPrev = page => {
  return {
    type: actionTypes.PRODUCTS_PREV,
    page: page
  }
}
export const productsDeptNextStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_START
  }
}
export const productsDeptNextSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_SUCCESS,
    page: page,
    filterDepartment: productData
  }
}
export const productsDeptNextFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_FAIL,
    error: error
  }
}
export const productsDeptNext = (page, departmentId) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT,
    page: page,
    departmentId: departmentId
  }
}
export const productsDeptPrevStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_START
  }
}
export const productsDeptPrevSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_SUCCESS,
    page: page,
    filterDepartment: productData
  }
}
export const productsDeptPrevFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_FAIL,
    error: error
  }
}
export const productsDeptPrev = (page, departmentId) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_PREV,
    page: page,
    departmentId: departmentId
  }
}
export const productsCatNextStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_NEXT_START
  }
}
export const productsCatNextSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_NEXT_SUCCESS,
    page: page,
    filterCategory: productData
  }
}
export const productsCatNextFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_NEXT_FAIL,
    error: error
  }
}
export const productsCatNext = (page, categoryId) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_NEXT,
    page: page,
    categoryId: categoryId
  }
}
export const productsCatPrevStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_PREV_START
  }
}
export const productsCatPrevSuccess = (page, productData) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_PREV_SUCCESS,
    page: page,
    filterCategory: productData
  }
}
export const productsCatPrevFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_PREV_FAIL,
    error: error
  }
}
export const productsCatPrev = (page, categoryId) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_PREV,
    page: page,
    categoryId: categoryId
  }
}
export const productsSearch = (page, queryStr) => {
  return {
    type: actionTypes.PRODUCTS_SEARCH,
    page: page,
    queryStr: queryStr
  }
}
export const productsSearchStart = () => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_START
  }
}
export const productsSearchSuccess = (page, queryStr, count, products) => {
  return {
    type: actionTypes.PRODUCTS_SEARCH_SUCCESS,
    queryStr: queryStr,
    page: page,
    products: products,
    count: count
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
export const fetchProductsInCategory = (page, categoryId) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_IN_CATEGORY,
    page: page,
    categoryId: categoryId
  }
}
export const productsInCategoryStart = () => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_START
  }
}
export const productsInCategorySuccess = (page, products, count) => {
  return {
    type: actionTypes.PRODUCTS_IN_CATEGORY_SUCCESS,
    page: page,
    products: products,
    count: count
  }
}
export const fetchProductsInDepartment = (page, departmentId) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_IN_DEPARTMENT,
    page: page,
    departmentId: departmentId
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
export const productsInDepartmentSuccess = (page, products, count) => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_SUCCESS,
    page: page,
    products: products,
    count: count
  }
}
export const productsInDepartmentFail = error => {
  return {
    type: actionTypes.PRODUCTS_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const clearFilter = () => {
  return {
    type: actionTypes.CLEAR_FILTER
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
export const postReview = (productId, review, rating) => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW,
    productId: productId,
    review: review,
    rating
  }
}
export const postReviewStart = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_START
  }
}
export const postReviewSuccess = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_SUCCESS,
  }
}
export const postReviewFail = error => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEW_FAIL,
    error: error
  }
}
export const confirmProductError = () => {
  return {
    type: actionTypes.PRODUCTS_CONFIRM_ERROR
  }
}