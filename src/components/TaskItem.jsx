export default function TaskItem({ task, onToggle, onDelete }) {
  const formattedDate = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const priorityClass = task.priority
    ? `priority-badge priority-${task.priority.toLowerCase()}`
    : "";

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
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
      </div>

      {(task.description || task.priority || formattedDate) && (
        <div className="task-details">
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}

          <div className="task-meta">
            {task.priority && (
              <span className={priorityClass}>{task.priority}</span>
            )}
            {formattedDate && (
              <span className="task-due-date">Due: {formattedDate}</span>
            )}
          </div>
        </div>
      )}
    </li>
  );
}