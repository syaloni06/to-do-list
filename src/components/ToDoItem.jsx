import React, { useState } from "react"; // Import React and useState for managing local state
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; // Import necessary icons for UI
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

// Define the ToDoItem component that takes props as input
const ToDoItem = (props) => {
  // Local state for handling edit mode, edited task details, and completion status
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(props.data.task); // State for editing the task name
  const [editDate, setEditDate] = useState(props.data.date); // State for editing the due date
  const [completed, setCompleted] = useState(props.data.completed); // State for task completion

  return (
    <>
      {/* Main container with conditional styling based on task status and edit mode */}
      <div
        className={`border-2 border-gray-300 rounded-lg p-4 sm:p-6 flex gap-4 items-center shadow-md mx-4 sm:mx-20 my-2 sm:my-4
          ${props.data.completed ? "bg-green-100" : "bg-white"}  
          ${edit ? "flex-col lg:flex-row" : ""}`} // Adjust layout if in edit mode // Green background if completed
      >
        {/* Conditional rendering: show input fields if in edit mode */}
        {edit ? (
          <>
            {/* Label and input for editing the task name */}
            <label
              htmlFor="task"
              className="text-sm sm:text-lg font-bold text-gray-700 w-full lg:w-auto"
            >
              Task name:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full lg:w-auto sm:flex-grow"
              type="text"
              name="task"
              value={editTask}
              id="task"
              onChange={(e) => setEditTask(e.target.value)}
            />

            {/* Label and input for editing the due date */}
            <label
              htmlFor="dueDate"
              className="text-sm sm:text-lg font-bold text-gray-700 w-full lg:w-auto"
            >
              Due Date:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full lg:w-auto sm:flex-grow"
              type="date"
              name="date"
              value={editDate}
              id="dueDate"
              onChange={(e) => setEditDate(e.target.value)}
            />
          </>
        ) : (
          // Display task details in view mode with strike-through if completed
          <div className="text-gray-700 text-sm sm:text-2xl font-bold flex gap-3 sm:gap-10 w-full sm:w-auto">
            {props.data.id}
            {props.data.completed ? (
              <>
                {/* Show task with strike-through decoration if completed */}
                <div className="line-through decoration-red-600 decoration-2">
                  {props.data.task}
                </div>
                <div className="text-gray-400">{props.data.date}</div>
              </>
            ) : (
              <>
                {/* Display task name and due date normally if not completed */}
                <div>{props.data.task}</div>
                <div>{props.data.date}</div>
              </>
            )}
          </div>
        )}

        {/* Action buttons: mark as complete, edit, or delete */}
        <div className="ml-0 lg:ml-auto flex items-center gap-3 sm:gap-6 w-auto">
          {/* Button to mark task as complete */}
          {completed ? (
            <IoMdCheckmarkCircle className="text-green-500 text-2xl sm:text-3xl font-extrabold hover:scale-125 transition-transform ease-in-out" />
          ) : (
            <button
              onClick={() => {
                props.complete(props.data.id); // Call complete function from props
                setCompleted(true); // Update local completion state
              }}
            >
              <IoMdCheckmarkCircleOutline className="text-gray-400 text-2xl sm:text-3xl font-extrabold hover:scale-125 transition-transform ease-in-out" />
            </button>
          )}

          {/* Button to save changes in edit mode, or toggle edit mode */}
          {edit ? (
            <button
              onClick={() => {
                props.edit(props.data.id, editTask, editDate); // Call edit function with updated values
                setEdit(false); // Exit edit mode
              }}
            >
              <IoCheckmarkDoneSharp className="text-yellow-500 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setEdit(true)}>
              <FaEdit className="text-cyan-500 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
            </button>
          )}

          {/* Button to delete task */}
          <button
            onClick={() => {
              props.remove(props.data.id); // Call remove function from props
            }}
          >
            <MdDeleteForever className="text-red-600 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem; // Export ToDoItem for use in other components
