
import { useState } from "react";


function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
}


function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low",
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!values.title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: values.title,
      priority: values.priority,
    };

    setTasks((prev) => [...prev, newTask]);
    resetForm();
  };

  return (
    <div >
      <h2>Task Tracker</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title: </label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter task"
          />
        </div>

        <div>
          <label>Priority: </label>
          <select
            name="priority"
            value={values.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Add Task</button>
      </form>

      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} — <strong>{task.priority}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <TaskManager />;
}


