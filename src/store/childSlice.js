import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  child: null,
};

const activeChildSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    selectChild: (state, action) => {
      state.child = action.payload;
    },
  },
});

export const { selectChild } = activeChildSlice.actions;

export default activeChildSlice.reducer;
