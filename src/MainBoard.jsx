import { PropTypes } from "prop-types";

//let nextId = 0;

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
              <button
                onClick={() => {
                  handleIsDoneTask(i);
                }}
              >
                {task.isDone ? "✅" : "❌"}
              </button>
              <button
                onClick={() => {
                  handleDeleteTask(i);
                }}
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
