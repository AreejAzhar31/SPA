import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice.js";
import { saveTasks } from "../utils/localStorage.js";

// store/index.js
// Creates the Redux store and subscribes to it so that every time
// the tasks state changes, the updated list is saved to
// localStorage automatically.

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  saveTasks(store.getState().tasks);
});
