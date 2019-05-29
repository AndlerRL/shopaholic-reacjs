import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const INIT_PAGE = 1;
const INIT_LIMIT = 10;
const INIT_COUNT = 101;
const INIT_DESCRIPTION = 200;

const initState = {
  isLoading: null,
  error: null,
  meta: {
    page: INIT_PAGE,
    totalPage: Math.ceil(INIT_COUNT / INIT_LIMIT),
    limit: INIT_LIMIT,
    count: INIT_COUNT,
    description: INIT_DESCRIPTION
  },
  searchQuery: {},
  count: null,
  products: [],
  reviews: [],
  reviewData: {},
  productData: [],
  productLocation: [],
  productId: null,
  departmentId: null,
  categoryId: null,
  averageStars: 0
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
    meta: {
      page: state.meta.page,
      totalPage: state.meta.totalPage,
      limit: state.meta.limit,
      count: state.meta.count,
      description: state.meta.description
    },
    products: action.products,
    count: action.count
  })
}
const productsNext = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    limit: state.meta.limit,
    count: state.meta.count,
    description: state.meta.description,
    page: state.meta.page + 1,
    [action.totalPage]: Math.ceil(state.meta.count / state.meta.limit),
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    products: action.products
  })
}
const productsPrev = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: {
      page: state.meta.page - 1,
      totalPage: Math.ceil(state.meta.count / state.meta.limit ),
      limit: state.meta.limit,
      count: state.meta.count,
      description: state.meta.description
    },
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
const productDetail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId,
    productData: action.productData
  })
};
const productLocation = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    productId: action.productId,
    productLocation: action.productLocation
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
    reviews: action.reviews,
    averageStars: action.averageStars
  })
};
const postReview = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    reviews: state.reviews.unshift(action.reviewData)
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
    case actionTypes.PRODUCT_DETAILS_START:
      return start(state, action);
    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return productDetail(state, action);
    case actionTypes.PRODUCT_DETAILS_FAIL:
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
    case actionTypes.PRODUCT_LOCATION_START:
      return start(state, action);
    case actionTypes.PRODUCT_LOCATION_SUCCESS:
      return productLocation(state, action);
    case actionTypes.PRODUCT_LOCATION_FAIL:
      return fail(state, action);
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