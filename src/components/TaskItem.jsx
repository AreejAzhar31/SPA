import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../features/tasks/taskSlice.js";

const priorityColors = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-red-100 text-red-700",
};

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className={`font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}
          >
            {task.priority}
          </span>
          {task.completed && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              Completed
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        <p className="text-xs text-gray-400 mt-1">Due: {task.dueDate}</p>
      </div>

      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => dispatch(toggleComplete(task.id))}
          className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-700 text-white"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="px-3 py-1.5 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
