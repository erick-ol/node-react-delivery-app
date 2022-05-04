import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';
import login from './login';

const reducer = combineReducers({ register, login });
const store = configureStore({ reducer });

export default store;
