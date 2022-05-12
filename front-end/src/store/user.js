import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    info: JSON.parse(window.localStorage.getItem('user')) || null,
  },
  reducers: {
    userLogout(state) {
      state.info = null;
      window.localStorage.removeItem('user');
    },
    saveUser(state, { payload }) {
      state.info = payload;
      window.localStorage.setItem('user', JSON.stringify(payload));
    },
  },
});

export const { userLogout, saveUser } = slice.actions;
export default slice.reducer;
