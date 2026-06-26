// About.jsx
// Static informational page describing the app and assignment.

function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 text-gray-700 leading-relaxed">
        <p>
          This Task Manager is a small Single Page Application (SPA)
          built with React and React Router as part of an academic
          assignment.
        </p>
        <p>
          It uses Redux Toolkit for state management, with tasks
          persisted to the browser's localStorage so they remain
          after a page refresh. Styling is done with Tailwind CSS.
        </p>
        <p>
          The app has three routes: a Dashboard that shows task
          statistics, a Tasks page for adding, completing, and
          deleting tasks, and this About page.
        </p>
      </div>
    </div>
  );
}

export default About;
