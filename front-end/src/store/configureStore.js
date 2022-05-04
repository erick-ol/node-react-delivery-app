import { combineReducers, configureStore } from '@reduxjs/toolkit';

// simple reducer to configure
const simpleReducer = () => 0;

const reducer = combineReducers({ simpleReducer });
const store = configureStore({ reducer });

export default store;
