import { useState, useEffect } from "react";
import { initialTasks } from "../data.js";
import { loadTasks, saveTasks } from "../utils/localStorage.js";

// useTasks.js
// Custom hook that holds the task state and all the logic for
// adding, toggling, and deleting tasks. Moving this out of App.jsx
// keeps the component focused on routing, while this hook owns the
// data and behavior. Tasks are persisted to localStorage so they
// survive page refreshes.

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = loadTasks();
    return stored ?? initialTasks;
  });

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function addTask({ title, description, priority, dueDate }) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
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