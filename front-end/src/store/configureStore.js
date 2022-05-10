import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import products from './products';
import user from './user';

const reducer = combineReducers({ register, login, products, user });
const store = configureStore({ reducer });

export default store;
