import { put } from 'redux-saga/effects';
import Axios from '../../axios-shop';

import * as actions from '../actions';

export function* fetchAttributesSaga(action) {
  yield put(actions.attributesStart())
  try {
    const response = yield Axios.get('/attributes')
    const attributes = []
    for (let key in response.data) {
      attributes.push(response.data[key])
    }

    action.size = attributes[0];
    action.color = attributes[1];
    yield localStorage.setItem('sizeVal', action.size.attribute_id);
    yield localStorage.setItem('colorVal', action.color.attribute_id);
    yield put(actions.attributeSuccess(attributes[0], attributes[1]))
    yield put(actions.attributeIdSuccess(action.size.attribute_id, action.color.attribute_id))
    
  } catch(error) {
    console.log(error);
    yield put(actions.attributeFail(error));
  }
}

export function* fetchAttributesValuesSaga(action) {
  yield put(actions.attributeValuesStart())
  try {
    const size = localStorage.getItem('sizeVal');
    const color = localStorage.getItem('colorVal');
    const sizeRes = yield Axios.get(`/attributes/values/${size}`);
    const colorRes = yield Axios.get(`/attributes/values/${color}`);
    
    yield put(actions.attributeValuesSuccess(sizeRes.data, colorRes.data))
  } catch(error) {
    console.log(error);
    yield put(actions.attributeValuesFail(error));
  }
}

export function* attributesInProductSaga(action) {
  yield put(actions.attributeInProductStart())

  try { 
    const response = yield Axios.get(`/attributes/inProduct/${action.productId}`)

    yield put(actions.attributeInProductSuccess(action.productId, response.data))
  } catch(error) {
    console.log(error)
    yield put(actions.attributeInProductFail(error));
  }
}