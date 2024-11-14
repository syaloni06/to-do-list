import { useState } from "react"; // Import useState for state management
import "./index.css"; // Import CSS styling
import ToDoList from "./components/ToDoList"; // Import ToDoList component
import Header from "./components/Header"; // Import Header component
import { IoMdAddCircle } from "react-icons/io"; // Import Add icon from react-icons

// Main App component
function App() {
  // State variables for managing the list of tasks, individual task input, due date, and unique task ID
  const [listToDo, setListToDo] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(1);

  // Function to add a new task
  const addTask = (e) => {
    e.preventDefault(); // Prevent default form submission
    setListToDo([
      ...listToDo,
      { task: task, date: date, id: id, completed: false },
    ]); // Add the new task with a unique ID, date, and completed status
    setTask(""); // Reset task input
    setDate(""); // Reset date input
    setId(id + 1); // Increment the ID for the next task
  };

  // Function to mark a task as completed
  const completedTask = (id) => {
    const completeList = listToDo.map((todo) => {
      if (todo.id === id) {
        todo.completed = true; // Update completed status for the specific task
      }
      return todo; // Return the updated task
    });
    setListToDo(completeList); // Update the task list state
  };

  // Function to edit a specific task by updating task name and due date
  const editTask = (id, task, date) => {
    const editList = listToDo.map((todo) => {
      if (todo.id === id) {
        todo.task = task; // Update task name
        todo.date = date; // Update task due date
      }
      return todo; // Return the updated task
    });
    setListToDo(editList); // Update the task list state
  };

  // Function to remove a specific task by filtering it out
  const removeTask = (id) => {
    const list = listToDo.filter((todo) => todo.id !== id); // Filter out task with matching ID
    setListToDo(list); // Update the task list state
  };

  // Render the main app UI with Header, input form, and task list
  return (
    <>
      <Header /> {/* Render header component */}
      <form className="flex justify-center">
        {" "}
        {/* Form to add tasks */}
        <fieldset className="w-full mt-10 border-2 border-gray-300 rounded-lg p-6 flex flex-wrap gap-4 items-center bg-white shadow-md mx-4 sm:mx-20">
          {/* Task input label */}
          <label
            htmlFor="task"
            className="text-base sm:text-lg font-bold text-gray-700 w-full sm:w-auto flex-shrink-0"
          >
            Task name:
          </label>
          {/* Task name input field */}
          <input
            className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow w-full lg:w-auto"
            type="text"
            name="task"
            value={task}
            id="task"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task name"
          />
          {/* Due date label */}
          <label
            htmlFor="dueDate"
            className="text-base sm:text-lg font-bold text-gray-700 w-full sm:w-auto flex-shrink-0"
          >
            Due Date:
          </label>
          {/* Due date input field */}
          <input
            className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow w-full lg:w-auto"
            type="date"
            name="date"
            value={date}
            id="dueDate"
            onChange={(e) => setDate(e.target.value)}
          />
          {/* Button to add a task */}
          <button
            onClick={addTask}
            className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-shrink-0 w-full lg:w-auto hover:scale-105 ease-in"
          >
            <div className="flex gap-2 items-center justify-center">
              Add Task
              <div className="text-3xl">
                <IoMdAddCircle /> {/* Add task icon */}
              </div>
            </div>
          </button>
        </fieldset>
      </form>
      {/* ToDoList component, passing necessary props */}
      <ToDoList
        list={listToDo}
        removeTask={removeTask}
        completedTask={completedTask}
        editTask={editTask}
      />
    </>
  );
}

export default App;
