import { useContext } from "react";
import { Context } from "../context";
const AddIcon = () => {
   let { handleAddTaskBar } = useContext(Context);
  return (
    <div className="icon" onClick={handleAddTaskBar}>
      <span>+</span>
    </div>
  );
};

export default AddIcon;
