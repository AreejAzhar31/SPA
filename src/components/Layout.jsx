import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
=======
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
>>>>>>> 21e9fa66e4ccd93f31d50a19a62e17e5eec0ef74
