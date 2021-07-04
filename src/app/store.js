import { configureStore } from '@reduxjs/toolkit';
import stayReducer from 'features/Stay/staySlice';

const rootReducer = {
  stays: stayReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
