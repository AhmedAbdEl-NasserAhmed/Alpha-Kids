import { configureStore } from "@reduxjs/toolkit";

import workshopSlice from "./workshopSlice";

const store = configureStore({
  reducer: {
    currentWorkshop: workshopSlice,
  },
});

export default store;
