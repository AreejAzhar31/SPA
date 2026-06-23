import React, { useState, useMemo } from "react";
import useTasks from "../hooks/useTasks";

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks();

  const [newTitle, setNewTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed | pending
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add a new task and clear the input
  const handleAdd = (e) => {
    e.preventDefault();
    addTask(newTitle);
    setNewTitle("");
  };

  // Begin editing a task: store its id and pre-fill the edit input
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };

  const saveEdit = (id) => {
    editTask(id, editValue);
    setEditingId(null);
    setEditValue("");
  };

  // Apply search text + status filter to the task list.
  // useMemo avoids recalculating on every render unless inputs change.
  const visibleTasks = useMemo(() => {
    return tasks
      .filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
      });
  }, [tasks, search, filter]);

  return (
    <section>
      <h2>Tasks</h2>

      {/* Add task form */}
      <form className="add-task-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      {/* Search + filter controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="filter-buttons">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              className={filter === f ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Task list / empty state */}
      {visibleTasks.length === 0 ? (
        <p className="empty-state">
          {tasks.length === 0
            ? "No tasks yet. Add your first task above!"
            : "No tasks match your search/filter."}
        </p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <label className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
              </label>

              {editingId === task.id ? (
                <input
                  type="text"
                  className="edit-input"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span className="task-title">{task.title}</span>
              )}

              <span className="task-status">
                {task.completed ? "Completed" : "Pending"}
              </span>

              <div className="task-actions">
                {editingId === task.id ? (
                  <button className="btn btn-small" onClick={() => saveEdit(task.id)}>
                    Save
                  </button>
                ) : (
                  <button className="btn btn-small" onClick={() => startEdit(task)}>
                    Edit
                  </button>
                )}
                <button
                  className="btn btn-small btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
