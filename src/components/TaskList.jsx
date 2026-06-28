import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 bg-white rounded-lg shadow p-6">
        No tasks yet. Add your first task above.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
