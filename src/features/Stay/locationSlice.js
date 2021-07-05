const { createSlice } = require('@reduxjs/toolkit');

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    city: '',
    country: 'Finland',
  },
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

const { reducer, actions } = locationSlice;

export const { setLocation } = actions;

export const selectLocation = (state) => state.location;
export const selectCountry = (state) => state.location.country;

export default reducer;
