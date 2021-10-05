import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
export let Context = createContext();
const ToDOContext = ({ children }) => {
  // initial task for getting todo
  let initialTask = JSON.parse(localStorage.getItem("todos")) || [];
  // All State
  let [taskBar, setTaskBar] = useState(false);
  const [TodosList, setTodosList] = useState(initialTask);
  const [length, setLength] = useState();
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();
  // set Todo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(TodosList));
    function CompletedTodoLength() {
      let complted = TodosList.filter((todo) => {
        return todo.completed === true;
      });
      setLength(complted.length);
    }
    CompletedTodoLength();
  }, [TodosList]);
  // To Open Add task bar
  const handleAddTaskBar = () => {
    setTaskBar(true);
    setEdit(false);
  };
  // To Remove Add task Bar
  const handleRemoveTaskBar = () => {
    setTaskBar(false);
  };

  // Add Task Function
  const submitTask = (e, task, date) => {
    e.preventDefault();
    if (edit) {
      let editedTask = TodosList.filter((todo) => {
        if (todo.id === editID) {
          todo.task = task;
          todo.date = date;
        }
        return todo;
      });

      setTodosList([...editedTask]);
      setEditID('')
    } else {
      setTodosList([
        ...TodosList,
        { id: uuidv4(), task, date, completed: false },
      ]);
    }
  };

  // Completed Task Function
  const completedTask = (id) => {
    let CompletedTodoGet = TodosList.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodosList([...CompletedTodoGet]);
  };

  // Delete Task Function
  const deleteTask = (id) => {
    let OtherTask = TodosList.filter((todo) => {
      return todo.id !== id;
    });
    setTodosList([...OtherTask]);
  };

  // Edit Task
  const EditTask = (task, date, id) => {
    setTaskBar(true);
    setTask(task);
    setDate(date);
    setEdit(true);
    setEditID(id);
  };
  return (
    <Context.Provider
      value={{
        taskBar,
        TodosList,
        handleAddTaskBar,
        handleRemoveTaskBar,
        submitTask,
        completedTask,
        length,
        setTaskBar,
        deleteTask,
        task,
        setTask,
        date,
        setDate,
        EditTask,
        edit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ToDOContext;
