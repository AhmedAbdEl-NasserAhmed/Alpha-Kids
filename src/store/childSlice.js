import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../services/Storage";

// const activeChild = localStorage.getItem("child");

const activeChild = storage.getStorage("child");

const initialState = activeChild
  ? activeChild
  : {
      id: "",
      name: "",
      gender: "",
      avatar: "",
    };

const activeChildSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    selectChild: (state, action) => {
      state.id = action.payload.childId;
      state.name = action.payload.childName;
      state.gender = action.payload.childGender;
      state.avatar = action.payload.childAvatar;
    },
  },
});

export const { selectChild } = activeChildSlice.actions;

export default activeChildSlice.reducer;
