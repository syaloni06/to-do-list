import ToDoItem from "./ToDoItem";  // Import ToDoItem component to render individual tasks

// Define ToDoList component, which receives props
const ToDoList = (props) => {
  return (
    <>
      {/* Display heading only if there are tasks in the list */}
      {props.list.length !== 0 && (
        <h1 className="text-3xl md:text-4xl text-slate-700 font-extrabold flex justify-center m-6 italic">
          To-Do-List
        </h1>
      )}
      
      {/* Map through the list of tasks and render a ToDoItem for each task */}
      {props.list.map((task, id) => {
        return (
          <ToDoItem
            data={task}  // Pass the task data to ToDoItem
            key={id}  // Set a unique key for each item
            remove={props.removeTask}  // Pass removeTask function for deleting tasks
            complete={props.completedTask}  // Pass completedTask function for marking tasks as complete
            edit={props.editTask}  // Pass editTask function for editing tasks
          />
        );
      })}
    </>
  );
};

export default ToDoList;  // Export ToDoList for use in other components
