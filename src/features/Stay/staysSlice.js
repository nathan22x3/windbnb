import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import data from 'assets/data/stays.json';
import { selectGuestsSum } from './guestSlice';
import { selectLocation } from './locationSlice';

export const fetchStays = createAsyncThunk(
  'stays/fetchStays',
  async () => data
);

const staySlice = createSlice({
  name: 'stays',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setStays: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchStays.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchStays.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    [fetchStays.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

const { reducer, actions } = staySlice;

export const { setStays } = actions;

export const selectStays = (state) => state.stays.data;
export const selectStatus = (state) => state.stays.status;

export const selectFilteredStays = createSelector(
  selectStays,
  selectLocation,
  selectGuestsSum,
  (stays, selectedLocation, guestsCount) => {
    if (selectedLocation.city === '' || selectedLocation.country === '')
      return stays;
    return stays?.filter(
      (stay) =>
        stay.city === selectedLocation.city &&
        stay.country === selectedLocation.country &&
        stay.maxGuests >= guestsCount
    );
  }
);

export const selectFilteredStaysCount = createSelector(
  selectFilteredStays,
  (stays) => stays?.length
);

export default reducer;
