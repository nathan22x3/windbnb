import { configureStore } from '@reduxjs/toolkit';
import guestsReducer from 'features/Stay/guestSlice';
import locationReducer from 'features/Stay/locationSlice';
import staysReducer from 'features/Stay/staysSlice';

const rootReducer = {
  stays: staysReducer,
  location: locationReducer,
  guests: guestsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
