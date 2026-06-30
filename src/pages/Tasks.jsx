import TaskForm from "../components/TaskForm";

export default function Tasks({ onAdd }) {
  return (
    <section>
      <h2>Tasks</h2>
      <p className="subtitle">Add, complete, or delete your tasks.</p>

      <TaskForm onAdd={onAdd} />
    </section>
  );
}
