import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import products from './products';
import user from './user';
import cart from './cart';
import sale from './sale';
import sellerOrders from './sellerOrders';
import customerOrders from './customerOrders';
import status from './status';

const reducer = combineReducers({
  register,
  login,
  products,
  user,
  cart,
  sale,
  sellerOrders,
  customerOrders,
  status,
});

const store = configureStore({ reducer });

export default store;
