import { NavLink } from "react-router-dom";

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

export default Navbar;
