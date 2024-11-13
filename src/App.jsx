import { useState } from "react";
import "./index.css";
import ToDoList from "./components/ToDoList";

function App() {
  const [listToDo, setListToDo] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(1);
  // console.log(props);
  const addTask = (e) => {
    e.preventDefault();
    setListToDo([
      ...listToDo,
      { task: task, date: date, id: id, completed: false },
    ]);
    setTask("");
    setDate("");
    setId(id + 1);
  };
  const completedTask = (id) => {
    const completeList = listToDo.map((todo) => {
      if (todo.id == id) {
        todo.completed = true;
      }
      return todo;
    });
    setListToDo(completeList);
  };
  const editTask = (id,task,date) => {
    const editList = listToDo.map((todo) => {
      if(todo.id == id){
        todo.task = task;
        todo.date = date;
      }
      return todo;
    });
  };
  const removeTask = (id) => {
    const list = listToDo.filter((todo) => todo.id !== id);
    setListToDo(list);
  };
  return (
    <>
      <form className="flex justify-center align-center ">
        <fieldset className="border-2">
          <label htmlFor="task"> Task name: </label>
          <input
            className="rounded-md w-full md:w-1/2 p-2 h-10 mb-2 md:mb-0 focus:outline-none focus:ring focus:ring-cyan-500"
            type="text"
            name="task"
            value={task}
            id="task"
            onChange={(e) => setTask(e.target.value)}
          />
          <label htmlFor="dueDate">Due Date: </label>
          <input
            type="date"
            name="date"
            value={date}
            id="dueDate"
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={addTask} className="add">
            Add Task
          </button>
        </fieldset>
      </form>
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
