import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  searchQuery: {},
  products: [],
  reviews: [],
  productId: null,
  departmentId: null,
  categoryId: null,
  review: '',
  rating: null
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
}
const productsSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    page: action.page,
    products: action.products
  })
}
const productsNext = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    page: action.page,
    products: action.products
  })
}
const productsPrev = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    page: action.page,
    products: action.products
  })
}
const productsSearch = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    searchQuery: {
      query_string: action.queryStr,
      all_words: action.allWords,
      page: action.page,
      limit: action.limit,
      description_length: action.desLength
    },
    products: action.products
  })
};
const productId = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId
  })
};
const productDetailId = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId
  })
};
const productIdLocation = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId
  })
};
const productInDepartment = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    departmentId: action.departmentId,
    products: action.products
  })
};
const productInCategory = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    categoryId: action.categoryId,
    products: action.products
  })
};
const fetchReviews = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId,
    reviews: action.reviews
  })
};
const postReview = (state, action) => {
  const newPost = updateObject(action.reviews, {
    review: action.review,
    rating: action.rating
  })
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId,
    reviews: state.reviews.concat(newPost)
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_START:
      return start(state, action);
    case actionTypes.PRODUCTS_SUCCESS:
      return productsSuccess(state, action);
    case actionTypes.PRODUCTS_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_ID_START:
      return start(state, action);
    case actionTypes.PRODUCTS_ID_SUCCESS:
      return productId(state, action);
    case actionTypes.PRODUCTS_ID_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_ID_DETAILS_START:
      return start(state, action);
    case actionTypes.PRODUCTS_ID_DETAILS_SUCCESS:
      return productDetailId(state, action);
    case actionTypes.PRODUCTS_ID_DETAILS_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_SUCCESS:
      return productInCategory(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_SUCCESS:
      return productInDepartment(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_FAIL:
      return fail(state, action);
    case actionTypes.FETCH_PRODUCT_REVIEWS_START:
      return start(state, action);
    case actionTypes.FETCH_PRODUCT_REVIEWS_SUCCESS:
      return fetchReviews(state, action);
    case actionTypes.FETCH_PRODUCT_REVIEWS_FAIL:
      return fail(state, action);
    case actionTypes.POST_PRODUCT_REVIEW_START:
      return start(state, action);
    case actionTypes.POST_PRODUCT_REVIEW_SUCCESS:
      return postReview(state, action);
    case actionTypes.POST_PRODUCT_REVIEW_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_SEARCH_START: 
      return start(state, action);
    case actionTypes.PRODUCTS_SEARCH_SUCCESS:
      return productsSearch(state, action);
    case actionTypes.PRODUCTS_SEARCH_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_ID_LOCATIONS_START:
      return start(state, action);
    case actionTypes.PRODUCTS_ID_LOCATIONS_SUCCESS:
      return productIdLocation(state, action);
    case actionTypes.PRODUCTS_NEXT_START:
      return start(state, action);
    case actionTypes.PRODUCTS_NEXT_SUCCESS: 
      return productsNext(state, action);
    case actionTypes.PRODUCTS_NEXT_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_PREV_START:
      return start(state, action);
    case actionTypes.PRODUCTS_PREV_SUCCESS:
      return productsPrev(state, action);
    case actionTypes.PRODUCTS_PREV_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;