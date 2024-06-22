// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import columnsReducer from './features/columns/columnsSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
    auth: authReducer,
  },
});
