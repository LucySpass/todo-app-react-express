import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import yellow from "@mui/material/colors/yellow";

import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import TodoProvider from "./contexts/TodosContext";

const theme = createTheme({
  palette: {
    primary: yellow,
  },
});

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <TodoProvider>
          <Header />
          <TodoList />
        </TodoProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
