import React from "react";
import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";

export default function Dashboard() {
  const { total, completed, pending } = useTasks();

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section>
      <h2>Welcome back 👋</h2>
      <p className="subtitle">
        Here's a quick overview of your tasks. Stay on top of things!
      </p>

      {/* Stat cards */}
      <div className="card-grid">
        <div className="card">
          <h3>{total}</h3>
          <p>Total Tasks</p>
        </div>
        <div className="card">
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>
        <div className="card">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>
        <div className="card">
          <h3>{percent}%</h3>
          <p>Completion Rate</p>
        </div>
      </div>

      {/* Quick navigation buttons */}
      <div className="quick-actions">
        <Link to="/tasks" className="btn btn-primary">
          Manage Tasks
        </Link>
        <Link to="/about" className="btn btn-secondary">
          About This App
        </Link>
      </div>
    </section>
  );
}
