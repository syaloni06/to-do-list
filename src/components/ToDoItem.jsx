import React, { useState } from "react";

const ToDoItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(props.data.task);
  const [editDate, setEditDate] = useState(props.data.date);
  return (
    <>
      {edit ? (
        <>
          <label htmlFor="task"> Task name: </label>
          <input
            className="rounded-md w-full md:w-1/2 p-2 h-10 mb-2 md:mb-0 focus:outline-none focus:ring focus:ring-cyan-500"
            type="text"
            name="task"
            value={editTask}
            id="task"
            onChange={(e) => setEditTask(e.target.value)}
          />
          <label htmlFor="dueDate">Due Date: </label>
          <input
            type="date"
            name="date"
            value={editDate}
            id="dueDate"
            onChange={(e) => setEditDate(e.target.value)}
          />
        </>
      ) : (
        <>
          {props.data.task}
          {props.data.date}
        </>
      )}
      {props.data.completed && <div>Completed</div>}
      <button
        onClick={() => {
          props.complete(props.data.id);
        }}
      >
        complete
      </button>
      {edit ? (
        <>
          <button
            onClick={() => {
              props.edit(props.data.id, editTask, editDate);
              setEdit(false);
            }}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
      <button
        onClick={() => {
          props.remove(props.data.id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ToDoItem;
