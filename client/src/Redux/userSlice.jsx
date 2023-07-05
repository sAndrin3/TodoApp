// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state) => {
      state.user = null;
      state.error = 'Login failed.';
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
