import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./components/contextComponent/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
