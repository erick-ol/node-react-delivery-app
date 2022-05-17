import { createSlice } from '@reduxjs/toolkit';
import { CUSTOMER_DELIVERED_PUT, SELLER_PREPARE_PUT, SELLER_TRANSIT_PUT } from '../api';

const slice = createSlice({
  name: 'status',
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

export const { resetState } = slice.actions;

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const statusPut = (token, id, route) => async (dispatch) => {
  try {
    dispatch(fetchStarted());

    if (route === 'preparing') {
      const { url, options } = SELLER_PREPARE_PUT(token, id);
      const response = await fetch(url, options);
      const json = await response.json();
      dispatch(fetchSuccess(json));
    }
    if (route === 'transit') {
      const { url, options } = SELLER_TRANSIT_PUT(token, id);
      const response = await fetch(url, options);
      const json = await response.json();
      dispatch(fetchSuccess(json));
    }
    if (route === 'delivered') {
      const { url, options } = CUSTOMER_DELIVERED_PUT(token, id);
      const response = await fetch(url, options);
      const json = await response.json();
      dispatch(fetchSuccess(json));
    }
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
