import { useState, useEffect } from "react";

const STORAGE_KEY = "task-manager.tasks";

// Default sample tasks shown on first run (when localStorage is empty)
const DEFAULT_TASKS = [
  { id: 1, title: "Finish Assignment", completed: false },
  { id: 2, title: "Read React Docs", completed: true },
];

/**
 * useTasks
 * A small custom hook that centralizes all task logic:
 * - loads tasks from localStorage on first render
 * - persists tasks to localStorage whenever they change
 * - exposes add / toggle / delete / edit helpers
 *
 * Using a single hook (instead of duplicating state in both
 * Dashboard.js and Tasks.js) keeps the two pages in sync.
 */
export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_TASKS;
    } catch (err) {
      console.error("Failed to read tasks from localStorage", err);
      return DEFAULT_TASKS;
    }
  });

  // Whenever tasks change, persist them to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to save tasks to localStorage", err);
    }
  }, [tasks]);

  const addTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(), // simple unique id
      title: title.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    if (!newTitle.trim()) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
  };

  // Derived stats used by the Dashboard page
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return { tasks, addTask, toggleTask, deleteTask, editTask, total, completed, pending };
}
