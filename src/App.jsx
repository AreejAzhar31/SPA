import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import { initialTasks } from "./data";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              onAdd={addTask}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
