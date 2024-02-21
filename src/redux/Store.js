import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import usersSlice from "./features/users/usersSlice";
export const store = configureStore({

  reducer: {
    tasksSlice: tasksSlice,
    userSlice: usersSlice,
  },

});
