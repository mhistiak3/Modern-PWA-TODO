import classes from "../style/TodoList.module.css";
import AddIcon from "./AddIcon";
import Todo from "./Todo";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext, useState } from "react";
import { Context } from "../context";

const TodoList = () => {
  const [state, setState] = useState("All");
  let { TodosList, length } = useContext(Context);

  
  const filterTodo = TodosList.filter((todo) => {
    if (state === "All") {
      return todo;
    } else if (state === "Completed") {
      return todo.completed === true;
    } else if (state === "Incompleted") {
      return todo.completed === false;
    } else {
      return todo;
    }
  });
  return (
    <div className={classes.todoList}>
      <div className={classes.todoListHeader}>
        <h1>INBOX</h1>
        <select onChange={(e) => setState(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
      </div>
      <Scrollbars style={{ height: "350px" }}>
        {TodosList.length > 0 ? (
          filterTodo.map((MyTodo) => <Todo task={MyTodo} key={MyTodo.id} />)
        ) : (
          <h2>No Task Found</h2>
        )}
      </Scrollbars>
      <AddIcon />
      <h3>Completed ({length}) Tasks</h3>
    </div>
  );
};

export default TodoList;
