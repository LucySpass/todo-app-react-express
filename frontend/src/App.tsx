import React, { useEffect, useState } from "react";
import "./App.css";
import { StatusEnum } from "./enums/status";
import { TodoInterface } from "./interfaces/todo";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./components/TodoList";
import Add from "./components/Add";

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((users) => {
        setTodos(users);
        // const requestOptionsPOST = {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ title: "AAA", status: StatusEnum.DONE }),
        // };

        // fetch("/todos", requestOptionsPOST)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setTodos(data);

        //     const requestOptionsPUT = {
        //       method: "PUT",
        //       headers: { "Content-Type": "application/json" },
        //       body: JSON.stringify({ title: "BBB", status: "DONE" }),
        //     };

        //     fetch(`/todos/${data[1].id}`, requestOptionsPUT)
        //       .then((response) => response.json())
        //       .then((data) => {
        //         setTodos(data);

        //         const requestOptionsDELETE = {
        //           method: "DELETE",
        //           headers: { "Content-Type": "application/json" },
        //         };

        //         fetch(`/todos/${data[0].id}`, requestOptionsDELETE)
        //           .then((response) => response.json())
        //           .then((data) => {
        //             setTodos(data);

        //             fetch("/todos", requestOptionsPOST)
        //               .then((response) => response.json())
        //               .then((data) => {
        //                 setTodos(data);

        //                 const requestOptionsPUT = {
        //                   method: "PUT",
        //                   headers: { "Content-Type": "application/json" },
        //                   body: JSON.stringify({
        //                     title: "BBB",
        //                     status: StatusEnum.UNDONE,
        //                   }),
        //                 };

        //                 fetch(
        //                   `/todos/${data[data.length - 1].id}`,
        //                   requestOptionsPUT
        //                 )
        //                   .then((response) => response.json())
        //                   .then((data) => {
        //                     setTodos(data);
        //                   });
        //               });
        //           });
        //       });
        // });
      });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <h1>Todos</h1>
      <Add
        onAdd={(title) => {
          const requestOptionsPOST = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, status: StatusEnum.UNDONE }),
          };

          fetch("/todos", requestOptionsPOST)
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
      />
    </div>
  );
}

export default App;
