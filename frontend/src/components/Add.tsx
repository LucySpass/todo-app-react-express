import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface AddProps {
  onAdd: (title: string) => void;
}

function Add({ onAdd }: AddProps) {
  const [input, setInput] = useState<string>("");
  const [addMode, setAddMode] = useState<boolean>(false);
  return (
    <>
      {addMode ? (
        <>
          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
            label="Todo title"
            variant="outlined"
          />
          <Button
            disabled={!input || input === ""}
            onClick={() => {
              onAdd(input);
              setInput("");
              setAddMode(false);
            }}
            variant="contained"
          >
            Add
          </Button>
        </>
      ) : (
        <Button onClick={() => setAddMode(!addMode)} variant="contained">
          Add new todo
        </Button>
      )}
    </>
  );
}

export default Add;
