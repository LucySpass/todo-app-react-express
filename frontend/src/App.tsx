import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoInterface } from "./interfaces/todo";

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((users) => {
        setTodos(users);
        const requestOptionsPOST = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "AAA", status: "DONE" }),
        };

        fetch("/todos", requestOptionsPOST)
          .then((response) => response.json())
          .then((data) => {
            setTodos(data);

            const requestOptionsPUT = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title: "BBB", status: "DONE" }),
            };

            fetch(`/todos/${data[1].id}`, requestOptionsPUT)
              .then((response) => response.json())
              .then((data) => {
                setTodos(data);

                const requestOptionsDELETE = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                };

                fetch(`/todos/${data[0].id}`, requestOptionsDELETE)
                  .then((response) => response.json())
                  .then((data) => {
                    setTodos(data);

                    fetch("/todos", requestOptionsPOST)
                      .then((response) => response.json())
                      .then((data) => {
                        setTodos(data);

                        const requestOptionsPUT = {
                          method: "PUT",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            title: "BBB",
                            status: "DONE",
                          }),
                        };

                        fetch(
                          `/todos/${data[data.length - 1].id}`,
                          requestOptionsPUT
                        )
                          .then((response) => response.json())
                          .then((data) => {
                            setTodos(data);
                          });
                      });
                  });
              });
          });
      });
  }, []);

  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map((user) => (
        <div key={user.id}>{user.title}</div>
      ))}
    </div>
  );
}

export default App;
