import { REGISTER_POST } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'registerPost',
  fetchConfig: ({ email, password }) => REGISTER_POST({ email, password }),
});

export const registerPost = slice.asyncAction;

export default slice.reducer;
