import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  department: false,
  category: false,
  search: false,
  meta: {
    page: 1,
    totalPage: 0,
    count: 0,
    query_string: ""
  },
  products: [],
  filterDepartment: [],
  filterCategory: [],
  reviews: [],
  productData: [],
  productLocation: [],
  averageStars: 0,
  productId: null,
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
      page: action.page,
      totalPage: Math.ceil(action.count / 10),
      count: action.count,
    },
    products: action.products,
  })
}
const productsNext = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page + 1
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    products: action.products
  })
}
const productsPrev = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page - 1,
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    products: action.products
  })
}
const productsDeptNext = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page + 1,
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    filterDepartment: action.filterDepartment
  })
}
const productsDeptPrev = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page - 1,
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    filterDepartment: action.filterDepartment
  })
}
const productsCatNext = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page + 1,
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    filterCategory: action.filterCategory,
    [action.categoryId]: action.categoryId
  })
}
const productsCatPrev = (state, action) => {
  const updateMeta = updateObject(state.meta, {
    page: state.meta.page - 1,
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: updateMeta,
    filterCategory: action.filterCategory,
    [action.categoryId]: action.categoryId
  })
}
const productsSearch = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    meta: {
      page: action.page,
      totalPage: Math.ceil(action.count / 10),
      count: action.count,
      query_string: action.queryStr,
    },
    search: true,
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
    department: true,
    filterDepartment: action.products,
    meta: {
      page: action.page,
      totalPage: Math.ceil(action.count / 10),
      count: action.count,
    },
  })
};
const productInCategory = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    category: true,
    filterCategory: action.products,
    meta: {
      page: action.page,
      totalPage: Math.ceil(action.count / 10),
      count: action.count,
    },
  })
};
const clearFilter = (state, action) => {
  let clear = updateObject(state, {
    department: false,
    category: false,
    search: false,
    meta: {
      query_string: ""
    }
  })

  if (state.department)
    clear = updateObject(state, {
      filterDepartment: [],
      department: false,
      meta: {
        query_string: ""
      }
    })

  if (state.category)
    clear = updateObject(state, {
      filterCategory: [],
      category: false,
      meta: {
        query_string: ""
      }
    })
    
  return clear
}
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
  })
};

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
    case actionTypes.CLEAR_FILTER:
      return clearFilter(state, action);
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
    case actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_SUCCESS: 
      return productsDeptNext(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_NEXT_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_SUCCESS:
      return productsDeptPrev(state, action);
    case actionTypes.PRODUCTS_IN_DEPARTMENT_PREV_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_NEXT_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_NEXT_SUCCESS: 
      return productsCatNext(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_NEXT_FAIL:
      return fail(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_PREV_START:
      return start(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_PREV_SUCCESS:
      return productsCatPrev(state, action);
    case actionTypes.PRODUCTS_IN_CATEGORY_PREV_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;