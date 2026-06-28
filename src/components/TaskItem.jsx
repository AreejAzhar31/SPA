export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </label>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
