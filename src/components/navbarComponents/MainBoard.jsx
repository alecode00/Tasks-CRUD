import { PropTypes } from "prop-types";
import "../../assets/styles/mainboard.css";

export const MainBoard = ({ tasks, handleIsDoneTask, handleDeleteTask }) => {
  MainBoard.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleIsDoneTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
  };
  return (
    <>
      <ul>
        {tasks.map((task, i) => (
          <>
            <li key={i}>
              {task.name}
              <div className="containerButtons">
                <button
                  className="mainBoardButtons"
                  onClick={() => {
                    handleIsDoneTask(i);
                  }}
                >
                  {task.isDone ? "✅" : "⛔"}
                </button>
                <button
                  className="mainBoardButtons"
                  onClick={() => {
                    handleDeleteTask(i);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
