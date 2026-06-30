import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 px-6 py-3 flex items-center gap-5">
      <h1 className="text-white text-lg font-semibold mr-4">Task Manager</h1>
      <NavLink to="/" end className={linkClasses}>
        Dashboard
      </NavLink>
      <NavLink to="/tasks" className={linkClasses}>
        Tasks
      </NavLink>
      <NavLink to="/about" className={linkClasses}>
        About
      </NavLink>
    </nav>
  );
}
