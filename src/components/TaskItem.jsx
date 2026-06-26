// TaskItem.jsx
// Displays a single task with complete/undo and delete buttons.
// Purely presentational — logic lives in the parent via Redux.

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 bg-white px-4 py-3 rounded-md shadow-sm mb-2">
      <span
        className={`flex-1 ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>
      <button
        onClick={() => onToggle(task.id)}
        className="px-3 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
