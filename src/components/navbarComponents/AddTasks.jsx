import { PropTypes } from "prop-types";
import { useState } from "react";
import "../../assets/styles/addtasks.css";

export const AddTasks = ({ handleSetTasks }) => {
  AddTasks.propTypes = {
    handleSetTasks: PropTypes.func.isRequired,
  };

  const [newTask, setNewTask] = useState("");
  const [isSended, setIsSended] = useState(false);

  const handleChange = (event) => {
    setNewTask(event.target.value);
    setIsSended(false);
  };
  const handleOnClick = () => {
    newTask &&
      handleSetTasks({
        name: newTask,
        isDone: false,
      });
    setIsSended(true);
  };

  return (
    <>
      <input
        className="input"
        value={newTask}
        type="text"
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button id="addButton" onClick={handleOnClick}>
        Add
      </button>
      {newTask && isSended == true ? (
        <h3>
          It was added <b>{newTask}</b>
        </h3>
      ) : (
        <h3>Add your new task</h3>
      )}
    </>
  );
};
