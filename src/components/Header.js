import classes from "../style/Header.module.css";
import logo from '../logo.png';
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
        <h2>Add Your Task</h2>
      </div>
      <span className={classes.date}>
        <b>Date:</b> {new Date().toLocaleDateString()}
      </span>
    </div>
  );
};

export default Header;
