import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Shared layout used on every page: navbar + main content area
export default function Layout() {
  return (
    <div className="layout">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
