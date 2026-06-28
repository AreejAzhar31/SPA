import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

const Tasks = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>
      <TaskForm />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Your Tasks
        </h2>
        <TaskList />
      </div>
    </div>
  );
};

export default Tasks;
