import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { TodoInterface } from "./interfaces/todo";
import { StatusEnum } from "./enums/status";

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  // fetch(url, requestOptions)
  // .then((data) => {
  //   if (!data.ok) {
  //     setIsError(true);
  //     throw data;
  //   }
  //   return data.json();
  // })
  // .then((apiData) => {
  //   setIsError(false);
  //   setApiData(apiData);
  // })
  // .catch((error) => {
  //   setIsError(true);
  // });

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((users) => {
        setTodos(users);
      });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Header
        onAdd={(title) => {
          const requestOptionsPOST = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title, status: StatusEnum.UNDONE }),
          };

          fetch(`/todos`, requestOptionsPOST)
            .then((response) => response.json())
            .then((data) => {
              setTodos(data);
            });
        }}
      />

      <TodoList
        data={todos}
        onStatusChange={(id) => {
          fetch(`/todos/${id}`, { method: "PUT" })
            .then((response) => response.json())
            .then((data) => {
              setTodos(data);
            });
        }}
        onDeletion={(id) => {
          fetch(`/todos/${id}`, { method: "DELETE" })
            .then((response) => response.json())
            .then((data) => {
              setTodos(data);
            });
        }}
      />
    </div>
  );
}

export default App;
