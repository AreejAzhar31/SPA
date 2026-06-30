import { useState } from "react";
import { taskValidationSchema } from "./validationSchema.js";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const values = await taskValidationSchema.validate(
        { title, description, priority, dueDate },
        { abortEarly: false }
      );

      onAdd(values);

      setTitle("");
      setDescription("");
      setPriority("");
      setDueDate("");
      setErrors({});
    } catch (validationError) {
      const fieldErrors = {};
      validationError.inner.forEach((err) => {
        if (!fieldErrors[err.path]) {
          fieldErrors[err.path] = err.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Task Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter a description..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && (
          <p className="error-text">{errors.description}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="">Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && <p className="error-text">{errors.priority}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        {errors.dueDate && <p className="error-text">{errors.dueDate}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}
