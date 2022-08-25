import { createContext, FC, ReactNode, useState } from "react";
import { TodoInterface } from "../interfaces/todo";
import { TodoContextInterface } from "../interfaces/todoContext";

export const TodoContext = createContext<TodoContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, saveTodos] = useState<TodoInterface[]>([]);

  const setTodos = (todos: TodoInterface[]) => {
    saveTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
