import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    info: JSON.parse(window.localStorage.getItem('user')) || null,
  },
  reducers: {
    logout(state) {
      state.info = null;
      window.localStorage.removeItem('user');
    },
    saveUser(state, { payload }) {
      state.info = payload;
      window.localStorage.setItem('user', JSON.stringify(payload));
    },
  },
});

export const { logout, saveUser } = slice.actions;
export default slice.reducer;
