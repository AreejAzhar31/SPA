import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

/**
 * App is the root component.
 * Layout wraps every route so the Header/Navbar/Footer stay
 * mounted and visible while only the inner page content changes.
 */
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        {/* Fallback: redirect unknown paths to Dashboard content */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
