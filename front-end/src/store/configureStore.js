import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import products from './products';
import user from './user';
import checkout from './checkout';

const reducer = combineReducers({ register, login, products, user, checkout });

const store = configureStore({ reducer });

export default store;
