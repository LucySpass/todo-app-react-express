import React, { useState, useContext } from "react";
import "./Add.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import yellow from "@mui/material/colors/yellow";

import { StatusEnum } from "../../enums/status";
import { TodoContext } from "../../contexts/TodosContext";
import { TodoContextInterface } from "../../interfaces/todoContext";
import { TodosAPI } from "../../api-service/TodosApi";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function Add() {
  const [input, setInput] = useState<string>("");
  const [addMode, setAddMode] = useState<boolean>(false);

  const { setTodos } = useContext(TodoContext) as TodoContextInterface;

  const getRandomName = () => {
    TodosAPI.getName().then((name: string) => setInput(name));
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: yellow,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {addMode ? (
        <Stack direction="row" spacing={1}>
          <TextField
            value={input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
            label="Todo title"
            variant="outlined"
          />
          <Button
            disabled={!input || input === ""}
            onClick={() => {
              TodosAPI.post({ title: input, status: StatusEnum.UNDONE }).then(
                (data) => setTodos(data)
              );

              setInput("");
              setAddMode(false);
            }}
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      ) : (
        <Button
          onClick={() => {
            setAddMode(!addMode);
            getRandomName();
          }}
          variant="contained"
        >
          Add new todo
        </Button>
      )}
    </ThemeProvider>
  );
}

export default Add;
