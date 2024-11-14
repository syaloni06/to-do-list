import ToDoItem from "./ToDoItem";
const ToDoList = (props) => {
  return (
    <>
      {props.list.length != 0 && (
        <h1 className="text-3xl md:text-4xl text-slate-700 font-extrabold flex justify-center m-6 italic">
          To-Do-List
        </h1>
      )}
      {props.list.map((task, id) => {
        return (
          <ToDoItem
            data={task}
            key={id}
            remove={props.removeTask}
            complete={props.completedTask}
            edit={props.editTask}
          />
        );
      })}
    </>
  );
};

export default ToDoList;
