import { configureStore } from "@reduxjs/toolkit";
import childSlice from "./childSlice";

const store = configureStore({
  reducer: {
    child: childSlice,
  },
});

export default store;
