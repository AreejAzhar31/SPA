import * as yup from "yup";

// Strips the time portion so "today" counts as a valid due date.
const startOfToday = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

export const taskValidationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required("Task title is required")
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),
  description: yup
    .string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be at most 200 characters"),
  priority: yup
    .string()
    .oneOf(["Low", "Medium", "High"], "Please select a priority")
    .required("Priority is required"),
  dueDate: yup
    .string()
    .required("Due date is required")
    .test("not-in-past", "Due date cannot be in the past", (value) => {
      if (!value) return false;
      const selected = new Date(value);
      return selected >= startOfToday();
    }),
});
