import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'; // the path to  slice

export const store = configureStore({
  reducer: {
    search: searchReducer, // A search slice 
  },
});

// While importing RootStack please be careful on types(My experience)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
