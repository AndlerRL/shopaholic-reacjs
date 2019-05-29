import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchProductsSaga(action) {
  yield put(actions.productsStart());
  const queryParams = `?page=${action.page}&limit=10&description_length=50`;
  try {
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsSuccess(action.page, response.data.rows, response.data.count));
  } catch (error) {
    console.error(error);
    yield put(actions.productsFail(error));
  }
}

export function* paginationNextSaga(action) {
  yield put(actions.productsNextStart())
  try {
    const queryParams = `?page=${action.page + 1}&limit=10&description_length=50`;
    const response = yield Axios.get('/products' + queryParams);

    yield put(actions.productsNextSuccess(action.page, action.totalPage, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsNextFail());
  }
}

export function* paginationPrevSaga(action) {
  yield put(actions.productsPrevStart())
  try {
    const queryParams = `?page=${action.page - 1}&limit=10&description_length=50`;
    const response = yield Axios.get('/products' + queryParams);
    
    yield put(actions.productsPrevSuccess(action.page, response.data.rows));
  } catch (error) {
    console.error(error);
    yield put(actions.productsPrevFail(error));
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
    const reviewData = {
      product_id: action.productId,
      review: action.review,
      rating: action.rating
    }
    const response = yield Axios.post(`/products/${action.productId}/reviews`, reviewData)
    console.log('posted a Review ', response);

    yield put(actions.postReviewSuccess(action.productId, response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.postReviewFail(error))
  }
}