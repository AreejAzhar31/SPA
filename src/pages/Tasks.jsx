import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

// Tasks.jsx
// Main task management page. Composes TaskForm and TaskList,
// passing down tasks and handlers received from App.jsx.

function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <TaskForm onAdd={onAdd} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default Tasks;
