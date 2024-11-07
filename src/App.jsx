import { useState } from "react";
import "./index.css";
import ToDoList from "./components/ToDoList";

function App() {
  const [listToDo,setListToDo] = useState([]);
  const [task,setTask] = useState("");
  const [date,setDate] = useState("");
  // console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    setListToDo([...listToDo, {task:task, date:date}]);
    setTask("");
    setDate("");
  }
  return (
    <>
      <form>
        <label htmlFor="task"> Task name: </label>
          <input type="text" name="task" value={task} id="task" onChange={(e) => setTask(e.target.value)}/>
        <label htmlFor="dueDate">Due Date: </label>
          <input type="date" name="date" value={date} id="dueDate" onChange={(e) => setDate(e.target.value)}/>
        <button onClick={handleSubmit} className="add">Add Task</button>
      </form>
      <ToDoList list={listToDo}/>
    </>
  );
}

export default App;
