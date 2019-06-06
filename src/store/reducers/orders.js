import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  onCheckout: null,
  purchased: null,
  onDetail: false,
  orders: [],
  order: [],
  orderDetail: [],
  orderId: null,
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
    purchased: null,
    error: action.error
  })
};
const onCheckout = (state, action) => {
  return updateObject(state, {
    onCheckout: true
  })
}
const createOrder = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    onCheckout: null,
    purchased: true,
    orderId: action.orderId
  })
}
const orderIdSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    onCheckout: null,
    onDetail: !state.onDetail,
    order: action.order
  })
};
const fetchOrders = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    onCheckout: null,
    orders: action.orderData
  })
}
const orderDetail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    onCheckout: null,
    orderDetail: action.orderDetail
  })
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ORDERS_START:
      return start(state, action);
    case actionTypes.ORDERS_SUCCESS:
      return createOrder(state, action);
    case actionTypes.ORDERS_FAIL:
      return fail(state, action);
    case actionTypes.ORDERS_ID_START:
      return start(state, action);
    case actionTypes.ORDERS_ID_SUCCESS:
      return orderIdSuccess(state, action);
    case actionTypes.ORDERS_IN_CUSTOMER_START:
      return start(state, action);
    case actionTypes.ORDERS_IN_CUSTOMER_SUCCESS:
      return fetchOrders(state, action);
    case actionTypes.ORDERS_IN_CUSTOMER_FAIL:
      return fail(state, action);
    case actionTypes.ORDERS_SHORT_DETAIL_START:
      return start(state, action);
    case actionTypes.ORDERS_SHORT_DETAIL_SUCCESS:
      return orderDetail(state, action);
    case actionTypes.ORDERS_SHORT_DETAIL_FAIL:
      return fail(state, action);
    case actionTypes.ORDERS_ON_CHECKOUT:
      return onCheckout(state, action);
    default:
      return state;
  }
};

export default reducer;