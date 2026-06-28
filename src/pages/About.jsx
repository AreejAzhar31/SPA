const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">About</h1>

      <section className="bg-white rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          The Application
        </h2>
        <p className="text-gray-600 text-sm">
          Task Manager is a simple Single Page Application that lets you
          create tasks, mark them as completed, delete them, and view a
          quick summary of your progress on the Dashboard. All tasks are
          saved in your browser's Local Storage, so they remain after you
          refresh the page.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>React (JavaScript + JSX)</li>
          <li>React Router DOM</li>
          <li>Redux Toolkit & React Redux</li>
          <li>React Hook Form & Yup</li>
          <li>Tailwind CSS</li>
          <li>Browser Local Storage</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          Assignment Purpose
        </h2>
        <p className="text-gray-600 text-sm">
          This project was built as a university assignment to demonstrate
          practical skills in building a React SPA with client-side
          routing, centralized state management, form validation, and
          data persistence without relying on a backend server.
        </p>
      </section>
    </div>
  );
};

export default About;
