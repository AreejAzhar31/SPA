import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask } from "../store/tasksSlice.js";

// useTasks.js
// Small custom hook that wraps Redux's useSelector/useDispatch so
// components can read tasks and call actions without importing
// Redux directly everywhere.

function useTasks() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return {
    tasks,
    addTask: (title) => dispatch(addTask(title)),
    toggleTask: (id) => dispatch(toggleTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
}

export default useTasks;
