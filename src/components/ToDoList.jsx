import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
const ToDoList = (props) => {
  return (
    <>
      {props.list.map((task,id) => {
        return <ToDoItem data={task} key={id} remove={props.removeTask} complete={props.completedTask}/>
      })}
    </>
  )
}

export default ToDoList;
