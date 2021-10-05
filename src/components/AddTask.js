import { useState, useContext } from "react";
import logo from "../logo.png";
import classes from "../style/AddTask.module.css";
import InputField from "./InputField";
import { Context } from "../context";
const AddTask = () => {
  
  let {
    handleRemoveTaskBar,
    submitTask,
    taskBar,
    setTaskBar,
    task,
    setTask,
    date,
    setDate,
    edit,
  } = useContext(Context);

  let style = taskBar ? "translateX(0)" : "translateX(500px)";

  return (
    <div className={classes.addTaskBox} style={{ transform: style }}>
      <span className="fa fa-arrow-left" onClick={handleRemoveTaskBar}></span>
      <h2>Add new task</h2>
      <img src={logo} alt="" />

      <form
        onSubmit={(e) => {
          submitTask(e, task, date);
          setTask("");
          setDate("");
          setTaskBar(false);
        }}
      >
        <InputField
          type="text"
          placeholder="Your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <InputField
          type="date"
          placeholder="Your task"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">{edit ? "Edit Task" : "Add task"}</button>
      </form>
    </div>
  );
};

export default AddTask;
