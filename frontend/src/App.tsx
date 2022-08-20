import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoInterface } from "./interfaces/todo";

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((users) => setTodos(users));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 2, title: "AAA", status: "DONE" }),
    };

    fetch("/todos", requestOptions)
      .then((response) => response.json())
      .then((data) => setTodos(data));
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
