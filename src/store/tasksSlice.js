import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialTasks } from "../data.js";
import { loadTasks } from "../utils/localStorage.js";

// tasksSlice.js
// Defines the tasks state and the reducers that update it.
// On load, tasks are read from localStorage if present, otherwise
// the app falls back to the sample data in data.js.

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadTasks() ?? initialTasks,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return { payload: { id: nanoid(), title, completed: false } };
      },
    },
    toggleTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, action) {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
