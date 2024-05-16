import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
const ThemeContext = createContext();

const initialTheme = "dark";

export const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.element,
  };
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
