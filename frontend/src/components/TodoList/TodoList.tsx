import React, { useEffect, useContext } from "react";
import { TodoInterface } from "../../interfaces/todo";
import { StatusEnum } from "../../enums/status";

import "./TodoList.css";

import { TodoContext } from "../../contexts/TodosContext";
import { TodoContextInterface } from "../../interfaces/todoContext";
import { TodosAPI } from "../../api-service/TodosApi";

import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext) as TodoContextInterface;

  useEffect(() => {
    TodosAPI.get().then((data) => setTodos(data));
  }, []);

  return (
    todos && (
      <div className="Todolist-container">
        <Paper elevation={3} sx={{ width: "80vw", height: "fit-content" }}>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((todo: TodoInterface, i: number) => (
                  <TableRow key={todo.id}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell align="right">
                      <Checkbox
                        onChange={() =>
                          todo.id &&
                          TodosAPI.put(todo.id).then((data) => setTodos(data))
                        }
                        checked={todo.status === StatusEnum.DONE}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() =>
                          todo.id &&
                          TodosAPI.delete(todo.id).then((data) =>
                            setTodos(data)
                          )
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    )
  );
}

export default TodoList;
