import { NavLink } from "react-router-dom";

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
