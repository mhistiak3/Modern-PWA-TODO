import classes from "../style/TodoList.module.css";
import { useContext } from "react";
import { Context } from "../context";
const Todo = ({ task }) => {
  let { completedTask, deleteTask, EditTask } = useContext(Context);
  return (
    <>
      <div className={`${classes.singleTodo} ${task.completed && "completed"}`}>
        <div className={classes.text}>
          <p>{task.task}</p>
          <span>
            <b>Time for Complete:</b> {task.date}
          </span>
        </div>
        <div className={classes.actions}>
          <span
            title={`${task.completed ? "Uncompleted" : "Completed"}`}
            className={`fa ${
              task.completed ? "fa fa-check-square-o" : "fa-square-o"
            }`}
            onClick={() => completedTask(task.id)}
          ></span>
          <span
            className="fa fa-trash"
            title="Delete"
            onClick={() => deleteTask(task.id)}
          ></span>
          <span
            className="fa fa-edit"
            title="Update"
            onClick={() => EditTask(task.task, task.date, task.id)}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Todo;
