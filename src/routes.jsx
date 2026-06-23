import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

// Centralized route definitions, used by App.js
const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/tasks", element: <Tasks /> },
  { path: "/about", element: <About /> },
];

export default routes;
