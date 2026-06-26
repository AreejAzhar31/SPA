import TaskItem from "./TaskItem.jsx";

// TaskList.jsx
// Renders the tasks as TaskItem components, or an empty-state
// message when there are no tasks.

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic">No tasks yet. Add one above!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
