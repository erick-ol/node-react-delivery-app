import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'token',
  initialState: {
    token: window.localStorage.getItem('token') || null,
  },
  reducers: {
    addToken(state, { payload }) {
      state.token = payload;
      window.localStorage.setItem('token', payload);
    },
  },
});

export const { addToken } = slice.actions;
export default slice.reducer;
