import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import token from './token';
import products from './products';
import checkout from './checkout';

const reducer = combineReducers({ register, login, token, products, checkout });
const store = configureStore({ reducer });

export default store;
