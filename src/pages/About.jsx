export default function About() {
  return (
    <section>
      <h2>About This Application</h2>
      <p>
        Task Manager is a small Single Page Application (SPA) built with React
         It lets you manage a simple to-do list
        without a backend or login.
      </p>

      <h3>Assignment Features</h3>
      <ul>
        <li>Three routes: Dashboard, Tasks, and About</li>
        <li>React Router for client-side navigation</li>
        <li>Shared layout with a navbar on every page</li>
        <li>Task list with add, complete, and delete actions</li>
        <li>Dashboard summary of total, completed, and pending tasks</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>React (JavaScript + JSX)</li>
        <li>React Router DOM</li>
        <li>CSS</li>
        <li>Vite</li>
      </ul>
    </section>
  );
}
