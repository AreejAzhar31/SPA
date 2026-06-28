import { useSelector } from "react-redux";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const stats = [
    { label: "Total Tasks", value: totalTasks, color: "text-blue-600" },
    { label: "Completed Tasks", value: completedTasks, color: "text-green-600" },
    { label: "Pending Tasks", value: pendingTasks, color: "text-yellow-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6 text-center"
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
