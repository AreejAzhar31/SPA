import React from "react";

export default function About() {
  return (
    <section>
      <h2>About Task Manager</h2>
      <p>
        Task Manager is a small, beginner-friendly Single Page Application
        (SPA) that helps you keep track of your daily to-dos. You can add,
        edit, complete, and delete tasks, all while your data is saved
        directly in your browser — no backend or sign-up required.
      </p>

      <h3>Technologies Used</h3>
      <ul>
        <li>React (JavaScript)</li>
        <li>React Router DOM</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS</li>
      </ul>

      <h3>What is a SPA?</h3>
      <p>
        A Single Page Application loads a single HTML page and updates the
        content dynamically using JavaScript as the user navigates, instead
        of requesting a brand-new page from a server every time. React
        Router DOM intercepts URL changes and swaps out the visible
        component (Dashboard, Tasks, or About) while shared UI &mdash; like
        this app's header, navigation bar, and footer &mdash; stays mounted
        the whole time. This makes navigation feel instant and app-like.
      </p>
    </section>
  );
}
