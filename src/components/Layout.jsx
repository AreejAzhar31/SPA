import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout wraps every page with a consistent Header, Navbar, and Footer.
 * The `children` prop is the page-specific content rendered by the router
 * (Dashboard, Tasks, or About), so Header/Navbar/Footer never unmount
 * while navigating between routes.
 */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
