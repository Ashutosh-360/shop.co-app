import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
export const UtilitySlice = createSlice({
  name: "Utility",
  initialState,
  reducers: {
    changeLoadingStateHandler: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLoadingStateHandler } = UtilitySlice.actions;
export default UtilitySlice.reducer;
export const Utility = (state) => state.Utility;
