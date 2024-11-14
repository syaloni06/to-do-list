import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ToDoItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(props.data.task);
  const [editDate, setEditDate] = useState(props.data.date);
  const [completed, setCompleted] = useState(props.data.completed);
  return (
    <>
      <div
        className={`border-2 border-gray-300 rounded-lg p-4 sm:p-6 flex gap-4 items-center bg-white shadow-md mx-4 sm:mx-20 my-2 sm:my-4  ${ props.data.completed ? 'bg-green-100' : 'bg-white'} ${ edit ? 'flex-col sm:flex' : 'flex'}`}>
        {edit ? (
          <>
            <label
              htmlFor="task"
              className="text-sm sm:text-lg font-bold text-gray-700 w-full sm:w-auto"
            >
              Task name:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:flex-grow"
              type="text"
              name="task"
              value={editTask}
              id="task"
              onChange={(e) => setEditTask(e.target.value)}
            />
            <label
              htmlFor="dueDate"
              className="text-sm sm:text-lg font-bold text-gray-700 w-full sm:w-auto"
            >
              Due Date:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:flex-grow"
              type="date"
              name="date"
              value={editDate}
              id="dueDate"
              onChange={(e) => setEditDate(e.target.value)}
            />
          </>
        ) : (
          <div className="text-gray-700 text-md sm:text-2xl font-bold flex gap-3 sm:gap-10 w-full sm:w-auto">
            {props.data.id}
            {props.data.completed ? (
              <>
                <div className="line-through decoration-red-600 decoration-2">
                  {props.data.task}
                </div>
                <div className="text-gray-400">{props.data.date}</div>
              </>
            ) : (
              <>
                <div>{props.data.task}</div>
                <div>{props.data.date}</div>
              </>
            )}
          </div>
        )}
        <div className="ml-0 sm:ml-auto flex items-center gap-3 sm:gap-6 w-auto justify-end">
          {completed ? (
            <IoMdCheckmarkCircle className="text-green-500 text-2xl sm:text-3xl font-extrabold hover:scale-125 transition-transform ease-in-out" />
          ) : (
            <button
              onClick={() => {
                props.complete(props.data.id);
                setCompleted(true);
              }}
            >
              <IoMdCheckmarkCircleOutline className="text-gray-400 text-2xl sm:text-3xl font-extrabold hover:scale-125 transition-transform ease-in-out" />
            </button>
          )}
          {edit ? (
            <button
              onClick={() => {
                props.edit(props.data.id, editTask, editDate);
                setEdit(false);
              }}
            >
              <IoCheckmarkDoneSharp className="text-yellow-500 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setEdit(true)}>
              <FaEdit className="text-cyan-500 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
            </button>
          )}
          <button
            onClick={() => {
              props.remove(props.data.id);
            }}
          >
            <MdDeleteForever className="text-red-600 text-2xl sm:text-3xl font-bold hover:scale-125 transition-transform ease-in-out" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
