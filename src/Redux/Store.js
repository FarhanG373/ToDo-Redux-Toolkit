import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "../Redux/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    // other reducers go here...
  },
});
