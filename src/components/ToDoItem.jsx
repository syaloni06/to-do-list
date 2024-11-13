import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

const ToDoItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(props.data.task);
  const [editDate, setEditDate] = useState(props.data.date);
  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-wrap gap-4 items-center bg-white shadow-md m-20">
        {edit ? (
          <>
            <label htmlFor="task" className="text-lg font-bold text-gray-700">
              {" "}
              Task name:{" "}
            </label>
            <input
              className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
              Due Date:{" "}
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
            <div className="text-gray-700 text-xl font-bold flex gap-10">
              {props.data.task}
              <div>{props.data.date}</div>
            </div>
          </>
        )}
        {props.data.completed && (
          <div className="text-3xl">
            <IoMdCheckmarkCircle />
          </div>
        )}
        <div className="ml-auto flex items-center gap-6">
          <button
            onClick={() => {
              props.complete(props.data.id);
            }}
          >
            <span className="font-extrabold text-3xl">
              <IoMdCheckmarkCircleOutline />
            </span>
          </button>
          {edit ? (
            <>
              <button
                onClick={() => {
                  props.edit(props.data.id, editTask, editDate);
                  setEdit(false);
                }}
              >
                <div className="text-3xl"><AiOutlineFileDone /></div>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setEdit(true)}>
                <div className="text-3xl">
                  <FaEdit />
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
              <MdDeleteForever />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
