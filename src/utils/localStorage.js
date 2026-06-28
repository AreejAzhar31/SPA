const STORAGE_KEY = "taskManager.tasks";

// Reads tasks from Local Storage. Returns an empty array if nothing is saved
// or if the saved data is corrupted.
export const loadTasks = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load tasks from local storage:", error);
    return [];
  }
};

// Saves the given tasks array to Local Storage.
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to local storage:", error);
  }
};
