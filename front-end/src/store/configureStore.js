import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import register from './register';

const reducer = combineReducers({ register });
const store = configureStore({ reducer });

export default store;
