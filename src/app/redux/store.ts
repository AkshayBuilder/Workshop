import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'; // Adjust the path to your slice

export const store = configureStore({
  reducer: {
    search: searchReducer, // Add your search slice here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
