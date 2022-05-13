import { createSlice } from '@reduxjs/toolkit';
import { SALES_POST } from '../api';

const slice = createSlice({
  name: 'sale',
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
    resetState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export default slice.reducer;

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const salesPost = (token, body) => async (dispatch) => {
  try {
    dispatch(fetchStarted());

    const { url, options } = SALES_POST(token, body);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    dispatch(fetchSuccess(json));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
