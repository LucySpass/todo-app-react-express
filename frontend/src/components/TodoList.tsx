import React from "react";
import { TodoInterface } from "../interfaces/todo";
import { StatusEnum } from "../enums/status";

import Checkbox from "@mui/material/Checkbox";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface TodoListProps {
  data: TodoInterface[];
  onStatusChange: (id: string) => void;
}

function TodoList({ data, onStatusChange }: TodoListProps) {
  return (
    data && (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((todo: TodoInterface, i: number) => (
              <TableRow key={todo.id}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell align="right">
                  <Checkbox
                    onChange={() => todo.id && onStatusChange(todo.id)}
                    checked={todo.status === StatusEnum.DONE}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default TodoList;
