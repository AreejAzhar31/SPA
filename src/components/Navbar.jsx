import { NavLink } from "react-router-dom";

<<<<<<< HEAD
const linkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-800">Task Manager</span>
        <div className="flex gap-1">
          <NavLink to="/" className={linkClasses} end>
            Dashboard
          </NavLink>
          <NavLink to="/tasks" className={linkClasses}>
            Tasks
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
=======
export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" end className={linkClass}>
        Dashboard
      </NavLink>
      <NavLink to="/tasks" className={linkClass}>
        Tasks
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
    </nav>
  );
}
import { NavLink } from "react-router-dom";

// Navbar.jsx
// Top navigation bar. NavLink's className callback lets us apply
// different Tailwind classes depending on whether the link is active.

function Navbar() {
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
>>>>>>> 21e9fa66e4ccd93f31d50a19a62e17e5eec0ef74

export default Navbar;
