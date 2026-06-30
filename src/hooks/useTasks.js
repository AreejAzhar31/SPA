import { useState } from "react";
import { initialTasks } from "../data.js";

// useTasks.js
// Custom hook that holds the task state and all the logic for
// adding, toggling, and deleting tasks. Moving this out of App.jsx
// keeps the component focused on routing, while this hook owns the
// data and behavior (still plain useState, no external library).

function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return { tasks, addTask, toggleTask, deleteTask };
}

export default useTasks;
