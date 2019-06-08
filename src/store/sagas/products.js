import { put, call } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchProductsSaga(action) {
  yield put(actions.productsStart());
  
  const queryParams = `?page=${action.page}&limit=10`;

  try {
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsSuccess(action.page, response.data.rows, response.data.count));
  } catch (error) {
    console.error(error);
    yield put(actions.productsFail(error));
  }
}

export function* productsInDepartmentSaga(action) {
  yield put(actions.productsInDepartmentStart());

  try {
    const queryParams = `page=${action.page}&limit=10`;
    const response = yield Axios.get(`/products/inDepartment/${action.departmentId}?${queryParams}`);

    yield put(actions.productsInDepartmentSuccess(action.page, response.data.rows, response.data.count));
  } catch(error) {
    console.error(error);
    yield put(actions.productsInDepartmentFail(error));
  }
}

export function* productsInCategoriesSaga(action) {
  yield put(actions.productsInCategoryStart());

  try {
    const queryParams = `page=${action.page}&limit=10`;
    const response = yield Axios.get(`/products/inCategory/${action.categoryId}?${queryParams}`);

    yield put(actions.productsInCategorySuccess(action.page, response.data.rows, response.data.count));
  } catch(error) {
    console.error(error);
    yield put(actions.productsInCategoryFail(error));
  }
}

// PAGINATION FOR ALL PRODUCTS
export function* paginationNextSaga(action) {
  yield put(actions.productsNextStart())

  try {
    const queryParams = `?page=${action.page + 1}&limit=10`;
    const response = yield Axios.get('/products' + queryParams);

    yield put(actions.productsNextSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsNextFail());
  }
}

export function* paginationPrevSaga(action) {
  yield put(actions.productsPrevStart())

  try {
    const queryParams = `?page=${action.page - 1}&limit=10`;
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsPrevSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsPrevFail(error));
  }
}

// PAGINATION FOR DEPARTMENTS
export function* paginationDeptNextSaga(action) {
  yield put(actions.productsDeptNextStart())

  try {
    const queryParams = `${action.departmentId}?page=${action.page + 1}&limit=10`;
    const response = yield Axios.get(`/products/inDepartment/${queryParams}`);
    
    yield put(actions.productsDeptNextSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsDeptNextFail());
  }
}

export function* paginationDeptPrevSaga(action) {
  yield put(actions.productsDeptPrevStart())

  try {
    const queryParams = `${action.departmentId}?page=${action.page - 1}&limit=10`;
    const response = yield Axios.get(`/products/inDepartment/${queryParams}`);
    
    yield put(actions.productsDeptPrevSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsDeptPrevFail(error));
  }
}

// PAGINATION FOR CATEGORIES
export function* paginationCatNextSaga(action) {
  yield put(actions.productsCatNextStart())

  try {
    const queryParams = `?page=${action.page + 1}&limit=10`;
    const response = yield Axios.get(`/products/inCategory/${action.categoryId}` + queryParams);

    yield put(actions.productsCatNextSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsCatNextFail());
  }
}

export function* paginationCatPrevSaga(action) {
  yield put(actions.productsCatPrevStart())

  try {
    const queryParams = `?page=${action.page - 1}&limit=10`;
    const response = yield Axios.get(`/products/inCategory/${action.categoryId}` + queryParams);
    
    yield put(actions.productsCatPrevSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsCatPrevFail(error));
  }
}
//#END_PAGINATION_REGION

export function* searchProductSaga(action) {
  yield put(actions.productsSearchStart());

  try {
    const queryParams = `?query_string=${action.queryStr}&all_words=on&page=${action.page}&limit=10`;
    const response = yield Axios.get(`/products/search${queryParams}`);

    yield put(actions.productsSearchSuccess(action.page, action.queryStr, response.data.count, response.data.rows));
  } catch(error) {
    console.error(error);
    yield put(actions.productsSearchFail(error));
  }
}

export function* productDataSaga(action) {
  yield put(actions.productDetailStart())

  try {
    const response = yield Axios.get(`/products/${action.productId}/details`);

    yield put(actions.productDetailSuccess(action.productId, response.data))
  } catch(error) {
    console.error(error);
    yield put(actions.productDetailFail(error))
  }
}

export function* productLocationSaga(action) {
  yield put(actions.productLocationStart())

  try {
    const response = yield Axios.get(`/products/${action.productId}/locations`);
    
    yield put(actions.productLocationSuccess(action.productId, response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.productLocationFail(error));
  }
}

export function* productReviewsSaga(action) {
  yield put(actions.fetchReviewsStart())

  try {
    let starCount = 0;
    const starLength = [];
    const response = yield Axios.get(`/products/${action.productId}/reviews`);
    
    // eslint-disable-next-line array-callback-return
    response.data.map(review => {
      starCount += review.rating
      starLength.push(review.rating)
    });
    
    const averageStar = starCount / starLength.length;

    yield put(actions.fetchReviewsSuccess(action.productId, response.data, averageStar));
  } catch(error) {
    console.log(error);
    yield put(actions.fetchReviewsFail(error));
  }
}

export function* postProductReviewSaga(action) {
  yield put(actions.postReviewStart())

  try {
    const token = yield localStorage.getItem('token');
    const reviewData = {
      review: action.review,
      rating: action.rating
    }
    yield Axios.post(`/products/${action.productId}/reviews`, reviewData, {
      headers: {
        "USER-KEY": token
      }
    })
    const product_id = yield call([localStorage, 'getItem'], 'product_detail_id')

    yield put(actions.postReviewSuccess());
    yield put(actions.fetchReviews(product_id));
  } catch(error) {
    console.log(error);
    yield put(actions.postReviewFail(error))
  }
}