import classes from "../style/TodoList.module.css";
import AddIcon from "./AddIcon";
import Todo from "./Todo";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext } from "react";
import { Context } from "../context";

const TodoList = () => {

  let { TodosList, length } = useContext(Context);
  return (
    <div className={classes.todoList}>
      <h1>INBOX</h1>
      <Scrollbars style={{ height: "420px" }}>
        {TodosList.length > 0 ? (
          TodosList.map((MyTodo) => <Todo task={MyTodo} key={MyTodo.id} />)
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
