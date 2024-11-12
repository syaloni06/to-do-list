import React from "react";

const ToDoItem = (props) => {
  return (
    <>
      {props.data.task}
      {props.data.date}
      {props.data.completed && <div>Completed</div>}
      <button
        onClick={() => {
          props.remove(props.data.id);
        }}
      >
        Delete
      </button>
      <button onClick={() => {
        props.complete(props.data.id);
      }}>complete</button>
    </>
  );
};

export default ToDoItem;
