import TaskList from "../components/TaskList";

export default function Dashboard({ tasks, onToggle, onDelete }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <section>
      <h2>Dashboard</h2>
      <p className="subtitle">Summary of your current tasks.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{total}</h3>
          <p>Total Tasks</p>
        </div>
        <div className="stat-card">
          <h3>{completed}</h3>
          <p>Completed Tasks</p>
        </div>
        <div className="stat-card">
          <h3>{pending}</h3>
          <p>Pending Tasks</p>
        </div>
      </div>

      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </section>
  );
}
