import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import About from "./pages/About.jsx";
import useTasks from "./hooks/useTasks.js";

// App.jsx
// Defines the app's routes. Task state and logic live in the
// useTasks custom hook, keeping this component focused on routing.

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard tasks={tasks} />} />
        <Route
          path="tasks"
          element={
            <Tasks
              tasks={tasks}
              onAdd={addTask}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
