import { useState } from "react";
import "./index.css";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import { IoMdAddCircle } from "react-icons/io";

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
  const editTask = (id, task, date) => {
    const editList = listToDo.map((todo) => {
      if (todo.id == id) {
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
      <Header />
      <form className="flex justify-center">
        <fieldset className="w-full border-2 border-gray-300 rounded-lg p-6 flex flex-wrap gap-4 items-center bg-white shadow-md mx-20">
          <label htmlFor="task" className="text-lg font-bold text-gray-700">
            Task name:
          </label>
          <input
            className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow"
            type="text"
            name="task"
            value={task}
            id="task"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task name"
          />
          <label htmlFor="dueDate" className="text-lg font-bold text-gray-700">
            Due Date:
          </label>
          <input
            className="rounded-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow"
            type="date"
            name="date"
            value={date}
            id="dueDate"
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-shrink-0"
          >
            <div className="flex gap-2 items-center">
              Add Task{" "}
              <div className="text-3xl">
                <IoMdAddCircle />
              </div>
            </div>
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
