import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorkshop: {},
};

const activeWorkshopdSlice = createSlice({
  name: "currentWorkshop",
  initialState,
  reducers: {
    selectCurrentWorkshop: (state, action) => {
      state.currentWorkshop = action.payload;
    },
  },
});

export const { selectCurrentWorkshop } = activeWorkshopdSlice.actions;

export default activeWorkshopdSlice.reducer;
