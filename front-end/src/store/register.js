import { REGISTER_POST } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'registerPost',
  fetchConfig: ({ name, email, password, role }) => REGISTER_POST(
    { name, email, password, role },
  ),
});

export const registerPost = slice.asyncAction;
export const { resetState: resetRegisterState } = slice.actions;

export default slice.reducer;
