import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ThemeContext from "../components/contextComponent/ThemeContext";
import { MainBoard } from "./navbarComponents/MainBoard";
import { AddTasks } from "./navbarComponents/AddTasks";
import "../assets/styles/navbar.css";

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
  const { theme, handleTheme } = useContext(ThemeContext);

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
    setTasks(tasks.filter((task, i) => itemNumber !== i));
  };
  const handleOnClick = () => {
    if (theme === "light") {
      handleTheme("dark");
    } else {
      handleTheme("light");
    }
  };

  return (
    <>
      <header className={theme}>
        <BrowserRouter>
          <div className="containerHeader">
            <section className="containerHeaderLeft">
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
                Add
              </NavLink>
            </section>
            <section>
              <h3>My Tasks List</h3>
            </section>
            <section>
              <button onClick={handleOnClick}>Change Mode</button>
            </section>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <div className="pageContainer">
                  <MainBoard
                    tasks={tasks}
                    handleIsDoneTask={handleIsDoneTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                </div>
              }
            />
            <Route
              path="/add"
              element={
                <div className="pageContainer">
                  <AddTasks handleSetTasks={handleSetTasks} />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
};
