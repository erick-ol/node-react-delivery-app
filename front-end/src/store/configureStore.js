import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import token from './token';
import products from './products';

const reducer = combineReducers({ register, login, token, products });
const store = configureStore({ reducer });

export default store;
