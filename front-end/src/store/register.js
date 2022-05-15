import { createSlice } from '@reduxjs/toolkit';
import { REGISTER_POST } from '../api';

const slice = createSlice({
  name: 'registerPost',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    resetRegisterState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export default slice.reducer;

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const { resetRegisterState } = slice.actions;

export const registerPost = (body, token = '') => async (dispatch) => {
  try {
    dispatch(fetchStarted());

    const { url, options } = REGISTER_POST(body, token);
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);

    return dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
