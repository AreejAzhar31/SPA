import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice.js";
import { taskValidationSchema } from "./validationSchema.js";

// Shared classes so valid/invalid inputs stay visually consistent.
const baseInputClasses =
  "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
const validBorder = "border-gray-300";
const invalidBorder = "border-red-500";

const TaskForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-800">Add New Task</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Task Title
        </label>
        <input
          type="text"
          {...register("title")}
          className={`${baseInputClasses} ${
            errors.title ? invalidBorder : validBorder
          }`}
          placeholder="e.g. Finish assignment"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={3}
          className={`${baseInputClasses} ${
            errors.description ? invalidBorder : validBorder
          }`}
          placeholder="Describe the task..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Priority */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          {...register("priority")}
          className={`${baseInputClasses} ${
            errors.priority ? invalidBorder : validBorder
          }`}
          defaultValue=""
        >
          <option value="" disabled>
            Select priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && (
          <p className="text-red-500 text-sm mt-1">
            {errors.priority.message}
          </p>
        )}
      </div>

      {/* Due Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Due Date
        </label>
        <input
          type="date"
          {...register("dueDate")}
          className={`${baseInputClasses} ${
            errors.dueDate ? invalidBorder : validBorder
          }`}
        />
        {errors.dueDate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dueDate.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
