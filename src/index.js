import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import authReducer from './store/reducers/auth';
import attributesReducer from './store/reducers/attributes';
import categoriesReducer from './store/reducers/categories';
import departmentsReducer from './store/reducers/departments';
import ordersReducer from './store/reducers/orders';
import productsReducer from './store/reducers/products';
import shoppingCartReducer from './store/reducers/shoppingCart';
import stripeReducer from './store/reducers/stripe';
import taxReducer from './store/reducers/tax';
import shippingReducer from './store/reducers/shipping';

import { 
  watchAttributes,
  watchAuth, 
  watchCategories, 
  watchDepartments, 
  watchOrders,
  watchProducts,
  watchShoppingCart,
  watchShipping,
  watchStripe,
  watchTax
} from './store/sagas';

import './index.css';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  attributes: attributesReducer,
  categories: categoriesReducer,
  departments: departmentsReducer,
  orders: ordersReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  shipping: shippingReducer,
  stripe: stripeReducer,
  tax: taxReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchDepartments);
sagaMiddleware.run(watchCategories);
sagaMiddleware.run(watchAttributes);
sagaMiddleware.run(watchProducts);
sagaMiddleware.run(watchOrders);
sagaMiddleware.run(watchShoppingCart);
sagaMiddleware.run(watchTax);
sagaMiddleware.run(watchShipping);
sagaMiddleware.run(watchStripe);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
