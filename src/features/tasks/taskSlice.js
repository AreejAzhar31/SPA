import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadTasks } from "../../utils/localStorage.js";

// Initial state is loaded directly from Local Storage so tasks
// survive a page refresh.
const initialState = {
  tasks: loadTasks(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      // Use a prepare callback so the component doesn't need to
      // generate the id/completed fields itself.
      prepare({ title, description, priority, dueDate }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            priority,
            dueDate,
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
