import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import products from './products';
import user from './user';
import cart from './cart';
import sale from './sale';
import sellerOrders from './sellerOrders';

const reducer = combineReducers({
  register,
  login,
  products,
  user,
  cart,
  sale,
  sellerOrders,
});

const store = configureStore({ reducer });

export default store;
