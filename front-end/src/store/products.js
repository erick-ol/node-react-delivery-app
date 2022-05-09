import { PRODUCTS_GET } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'products',
  fetchConfig: (token) => PRODUCTS_GET(token),
});

export const productsGet = slice.asyncAction;
export const { resetState: resetProductsState } = slice.actions;

export default slice.reducer;
