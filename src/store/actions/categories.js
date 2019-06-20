import * as actionTypes from './actionTypes';

export const categoriesStart = () => {
  return {
    type: actionTypes.CATEGORIES_START
  }
}
export const categoriesSuccess = (categories, count) => {
  return {
    type: actionTypes.CATEGORIES_SUCCESS,
    categories: categories,
    count: count
  }
}
export const categoriesFail = error => {
  return {
    type: actionTypes.CATEGORIES_FAIL,
    error: error
  }
}
export const fetchCategories = categories => {
  return {
    type: actionTypes.FETCH_CATEGORIES,
    categories: categories
  }
}
export const fetchCategoryId = categoryId => {
  return {
    type: actionTypes.FETCH_CATEGORY_ID,
    categoryId: categoryId
  }
}
export const categoryId = (categoryId, category, name) => {
  return {
    type: actionTypes.CATEGORY_ID_SUCCESS,
    categoryId: categoryId,
    category: category,
    name: name
  }
}
export const categoryIdFail = error => {
  return {
    type: actionTypes.CATEGORY_ID_FAIL,
    error: error
  }
}
export const categoriesInDepartmentStart = () => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_START
  }
}
export const categoriesInDepartmentSuccess = products => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_SUCCESS,
    products: products
  }
}
export const categoriesInDepartmentFail = error => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const fetchCategoriesInDepartment = departmentId => {
  return {
    type: actionTypes.FETCH_CATEGORY_IN_DEPARTMENT,
    departmentId: departmentId
  }
}
export const categoriesInProductStart = () => {
  return {
    type: actionTypes.CATEGORY_IN_PRODUCT_START
  }
}
export const categoriesInProductSuccess = category => {
  return {
    type: actionTypes.CATEGORY_IN_PRODUCT_SUCCESS,
    category: category
  }
}
export const categoriesInProductFail = error => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const fetchCategoriesInProduct = productId => {
  return {
    type: actionTypes.FETCH_CATEGORY_IN_PRODUCT,
    productId: productId
  }
}
export const clearCategories = () => {
  return {
    type: actionTypes.CLEAR_CATEGORIES
  }
}