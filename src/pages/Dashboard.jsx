// Dashboard.jsx
// Shows summary statistics: total, completed, and pending tasks.

function Dashboard({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const stats = [
    { label: "Total Tasks", value: totalTasks },
    { label: "Completed", value: completedTasks },
    { label: "Pending", value: pendingTasks },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Dashboard</h2>
      <p className="text-gray-500 mb-6">Here is a quick overview of your tasks.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm p-5 text-center"
          >
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
