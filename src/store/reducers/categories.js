import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  hasValue: {
    Animal: false,
    Christmas: false,
    Flower: false,
    French: false,
    Italian: false,
    Irish: false,
    "Valentine's": false
  },
  categories: [],
  category: [],
  categoryId: null,
  catInDept: []
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
const categoriesSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    categories: action.categories
  })
};
const categoryId = (state, action) => {
  const hasValue = updateObject(state.hasValue, {
    [action.name]: !state.hasValue[action.name],
  });

  return updateObject(state, {
    error: null,
    categoryId: action.categoryId,
    category: hasValue[action.name] ? 
      state.category.concat(action.category) :
      state.category.length && hasValue[action.name] ?
        state.category.concat(action.category) : 
        state.category.filter(id => id.category_id !== action.categoryId),
    hasValue: hasValue
  })
}
const categoriesInProductSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    isLoading: null,
    category: [...new Set(action.category)]  
  })
}
const categoriesInDepartmentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    isLoading: null,
    catInDept: action.products
  })
};
const clearCategories = (state, action) => {
  const updateHasValue = updateObject(state.hasValue, {
    Animal: false,
    Christmas: false,
    Flower: false,
    French: false,
    Italian: false,
    Irish: false,
    "Valentine's": false
  })
  return updateObject(state, {
    category: [],
    hasValue: updateHasValue,
    categoryId: null
  });
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORIES_START:
      return start(state, action);
    case actionTypes.CATEGORIES_SUCCESS:
      return categoriesSuccess(state, action);
    case actionTypes.CATEGORIES_FAIL:
      return fail(state, action);
    case actionTypes.CATEGORY_ID_SUCCESS:
      return categoryId(state, action);
    case actionTypes.CATEGORY_ID_FAIL:
      return fail(state, action)
    case actionTypes.CATEGORY_IN_DEPARTMENT_START:
      return start(state, action);
    case actionTypes.CATEGORY_IN_DEPARTMENT_SUCCESS:
      return categoriesInDepartmentSuccess(state, action);
    case actionTypes.CATEGORY_IN_DEPARTMENT_FAIL:
      return fail(state, action);
    case actionTypes.CATEGORY_IN_PRODUCT_START:
      return start(state, action);
    case actionTypes.CATEGORY_IN_PRODUCT_SUCCESS:
      return categoriesInProductSuccess(state, action);
    case actionTypes.CATEGORY_IN_PRODUCT_FAIL:
      return fail(state, action);
    case actionTypes.CLEAR_CATEGORIES:
      return clearCategories(state, action);
    default:
      return state;
  }
};

export default reducer;