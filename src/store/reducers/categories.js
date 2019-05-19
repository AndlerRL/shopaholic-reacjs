import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  categoriesQuery: {},
  categories: [],
  categoryId: null,
  productId: null,
  departmentId: null
}

const start = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    error: null,
  })
};
const fail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: action.error
  })
};
const categoriesQuerySuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    categoriesQuery: {
      order: action.orderQuery,
      page: action.pageQuery,
      limit: action.limitQuery
    }
  })
}
const categoriesSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    categoryId: action.catId
  })
};
const categoriesInProductSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    isLoading: null,
    productId: action.productId
  })
}
const categoriesInDepartmentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    isLoading: null,
    departmentId: action.depId
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORIES_START:
      return start(state, action);
    case actionTypes.CATEGORIES_SUCCESS:
      return categoriesSuccess(state, action);
    case actionTypes.CATEGORIES_FAIL:
      return fail(state, action);
    case actionTypes.CATEGORIES_QUERY:
      return categoriesQuerySuccess(state, action);
    case actionTypes.CATEGORIES_QUERY_FAIL:
      return fail(state, action);
    case actionTypes.CATEGORIES_IN_DEPARTMENT_START:
      return start(state, action);
    case actionTypes.CATEGORIES_IN_DEPARTMENT_SUCCESS:
      return categoriesInDepartmentSuccess(state, action);
    case actionTypes.CATEGORIES_IN_DEPARTMENT_FAIL:
      return fail(state, action);
    case actionTypes.CATEGORIES_IN_PRODUCT_START:
      return start(state, action);
    case actionTypes.CATEGORIES_IN_PRODUCT_SUCCESS:
      return categoriesInProductSuccess(state, action);
    case actionTypes.CATEGORIES_IN_PRODUCT_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;