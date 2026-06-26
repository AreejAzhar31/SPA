import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  return (
    <section>
      <h2>Tasks</h2>
      <p className="subtitle">Add, complete, or delete your tasks.</p>

      <TaskForm onAdd={onAdd} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </section>
  );
}
