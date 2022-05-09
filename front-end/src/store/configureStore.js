import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';
import token from './token';

const reducer = combineReducers({ register, login, token });
const store = configureStore({ reducer });

export default store;
