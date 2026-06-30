import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice.js";
import { saveTasks } from "../utils/localStorage.js";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Whenever the store changes, save the current tasks list to Local Storage.
// This keeps persistence logic out of the components.
store.subscribe(() => {
  saveTasks(store.getState().tasks.tasks);
});
