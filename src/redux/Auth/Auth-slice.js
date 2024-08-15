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
    logIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // Add any other reducers here
    fetchCurrentUser: (state) => {
      // Implementation for fetching current user
    },
  },
});

export const { logIn, logOut, fetchCurrentUser } = authSlice.actions;
export default authSlice.reducer;
