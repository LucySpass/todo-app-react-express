import { TodoInterface } from "./todo";

export interface TodoContextInterface {
  todos: TodoInterface[];
  setTodos: (data: TodoInterface[]) => void;
}
