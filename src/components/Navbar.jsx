import React from "react";
import { NavLink } from "react-router-dom";

// NavLink automatically adds an "active" class when its route matches
// the current URL, which we use to highlight the active nav item.
export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

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
