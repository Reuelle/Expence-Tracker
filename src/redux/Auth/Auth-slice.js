// src/redux/Auth/Auth-slice.js
import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, fetchCurrentUser } from './Auth-operations'; // Adjust path as needed

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    // other initial state properties
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // other reducers
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;


  
