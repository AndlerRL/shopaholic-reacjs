import * as actionTypes from './actionTypes';

export const categoriesQuerySuccess = (orderQuery, pageQuery, limitQuery) => {
  return {
    type: actionTypes.CATEGORIES_QUERY,
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
export const categoriesSuccess = categories => {
  return {
    type: actionTypes.CATEGORIES_SUCCESS,
    categories: categories
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
export const fetchCategoryId = (categoryId, category) => {
  return {
    type: actionTypes.FETCH_CATEGORY_ID,
    categoryId: categoryId,
    category: category
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
export const categoriesInDepartmentSuccess = (productId, department) => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_SUCCESS,
    productId: productId,
    department: department
  }
}
export const categoriesInDepartmentFail = error => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const fetchCategoriesInDepartment = (productId, department) => {
  return {
    type: actionTypes.FETCH_CATEGORY_IN_DEPARTMENT,
    productId: productId,
    department: department
  }
}
export const categoriesInProductStart = () => {
  return {
    type: actionTypes.CATEGORY_IN_PRODUCT_START
  }
}
export const categoriesInProductSuccess = (productId, category) => {
  return {
    type: actionTypes.CATEGORY_IN_PRODUCT_SUCCESS,
    productId: productId,
    category: category
  }
}
export const categoriesInProductFail = error => {
  return {
    type: actionTypes.CATEGORY_IN_DEPARTMENT_FAIL,
    error: error
  }
}
export const fetchCategoriesInProduct = (departmentId, categories) => {
  return {
    type: actionTypes.FETCH_CATEGORY_IN_PRODUCT,
    departmentId: departmentId,
    categories: categories
  }
}