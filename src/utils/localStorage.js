// localStorage.js
// Small helper functions for reading/writing the tasks array to
// the browser's localStorage, so tasks persist between page reloads.

const STORAGE_KEY = "tasks";

export function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return null;
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to localStorage:", error);
  }
}
