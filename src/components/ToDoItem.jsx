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
      <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-wrap gap-4 items-center bg-white shadow-md mx-20 my-4">
        {edit ? (
          <>
            <label htmlFor="task" className="text-lg font-bold text-gray-700">
              Task name:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow"
              type="text"
              name="task"
              value={editTask}
              id="task"
              onChange={(e) => setEditTask(e.target.value)}
            />
            <label
              htmlFor="dueDate"
              className="text-lg font-bold text-gray-700"
            >
              Due Date:
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow"
              type="date"
              name="date"
              value={editDate}
              id="dueDate"
              onChange={(e) => setEditDate(e.target.value)}
            />
          </>
        ) : (
          <>
            <div className="text-gray-700 text-2xl font-bold flex gap-10">
              {props.data.id}
              {props.data.completed ? (<><div className="line-through decoration-red-600">{props.data.task}</div><div className="text-gray-300">{props.data.date}</div></>) :(<><div>{props.data.task}</div><div>{props.data.date}</div></>)}
            </div>
          </>
        )}
        <div className="ml-auto flex items-center gap-6">
          {completed ? (
            <IoMdCheckmarkCircle className="text-green-500 text-3xl font-extrabold" />
          ) : (
            <button
              onClick={() => {
                props.complete(props.data.id);
                setCompleted(true); // Mark as completed
              }}
            >
              <IoMdCheckmarkCircleOutline className="text-gray-400 text-3xl font-extrabold" />
            </button>
          )}
          {edit ? (
            <>
              <button
                onClick={() => {
                  props.edit(props.data.id, editTask, editDate);
                  setEdit(false);
                }}
              >
                <IoCheckmarkDoneSharp className="text-yellow-500 text-3xl text-bold" />
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setEdit(true)}>
                <div className="text-3xl">
                  <FaEdit className="text-cyan-500 text-3xl text-bold" />
                </div>
              </button>
            </>
          )}
          <button
            onClick={() => {
              props.remove(props.data.id);
            }}
          >
            <div className="text-3xl">
              <MdDeleteForever className="text-red-600 text-3xl text-bold" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
