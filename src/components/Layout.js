import classes from "../style/Layout.module.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTask from "./AddTask";

import ToDOContext from "../context";

const Layout = () => {
  
  return (
    <ToDOContext>
      <div className={classes.fullLayout}>
        <div className={classes.taskLayout}>
          <Header />
          <TodoList />
          <AddTask />
        </div>
      </div>
    </ToDOContext>
  );
};

export default Layout;
