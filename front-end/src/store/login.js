import { LOGIN_POST } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'loginPost',
  fetchConfig: ({ email, password }) => LOGIN_POST({ email, password }),
});

export const loginPost = slice.asyncAction;
export const { resetState: resetLoginState } = slice.actions;

export default slice.reducer;
