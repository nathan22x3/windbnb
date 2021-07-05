const { createSlice } = require('@reduxjs/toolkit');

const guestsSlice = createSlice({
  name: 'guests',
  initialState: {
    adults: 0,
    children: 0,
  },
  reducers: {
    incrementAdult: (state) => {
      state.adults += 1;
    },
    decrementAdult: (state) => {
      state.adults -= 1;
    },
    incrementChildren: (state) => {
      state.children += 1;
    },
    decrementChildren: (state) => {
      state.children -= 1;
    },
  },
});

const { reducer, actions } = guestsSlice;

export const {
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
} = actions;

export const selectAdult = (state) => state.guests.adults;
export const selectChildren = (state) => state.guests.children;

export const selectGuestsSum = (state) =>
  state.guests.adults + state.guests.children;

export default reducer;
