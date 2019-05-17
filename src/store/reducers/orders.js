import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  orders: [],
  orderId: null
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
    error: true
  })
};
const createOrder = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    cart_id: action.cartId,
    shipping_id: action.shippingId,
    tax_id: action.taxId
  });
  return updateObject(state, {
    isLoading: null,
    error: null,
    orders: state.orders.concat(newOrder)
  })
}
const orderIdSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    orderId: action.orderId
  })
};
const fetchOrders = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    orders: action.orderData
  })
}
const orderDetail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    orderId: action.orderId
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
    default:
      return state;
  }
};

export default reducer;