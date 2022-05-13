import { SALES_POST } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'sale',
  fetchConfig: (token, body) => SALES_POST(token, body),
});

export const salesPost = slice.asyncAction;
export const { resetState: resetSaleState } = slice.actions;

export default slice.reducer;
