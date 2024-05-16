import { /* useContext, */ useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
/* import ThemeContext from "../context/ThemeContext"; */
import { MainBoard } from "./MainBoard";
import { AddTasks } from "./AddTasks";

const initialTasks = [
  {
    name: "Get up",
    isDone: false,
  },
  {
    name: "Clean myself",
    isDone: false,
  },
];
export const NavBar = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleSetTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleIsDoneTask = (itemNumber) => {
    setTasks(
      tasks.map((task, i) => {
        if (i != itemNumber) {
          return task;
        } else {
          return { ...task, isDone: !task.isDone };
        }
      })
    );
  };
  const handleDeleteTask = (itemNumber) => {
    setTasks(tasks.filter((task,i) => itemNumber !== i));
  };

  return (
    <>
      <header>
        <BrowserRouter>
          <div>
            <section>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/add"
              >
                Add Tasks
              </NavLink>
            </section>
            <section>
              <h3>Welcome</h3>
            </section>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <MainBoard
                  tasks={tasks}
                  handleIsDoneTask={handleIsDoneTask}
                  handleDeleteTask={handleDeleteTask}
                />
              }
            />
            <Route
              path="/add"
              element={<AddTasks handleSetTasks={handleSetTasks} />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
};
