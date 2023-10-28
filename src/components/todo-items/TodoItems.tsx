import React, { useState } from "react";
import "./main.scss";
import { addItem } from "../app/slice/todoSlice";
import { useAppDispatch } from "../app/hooks";
import { InitialState } from "../app/slice/todoSlice";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export const TodoItems: React.FC = () => {
  const dispatch = useAppDispatch();

  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");

  const initialValue: InitialState = {
    title: firstValue,
    description: secondValue,
    id: Math.random(),
  };

  // Gets the latest value from the first input
  const handleFirstVal = (firstVal: string) => {
    if (firstVal) {
      setFirstValue(firstVal);
      console.log(firstVal);
    } else {
      setFirstValue("");
    }
  };

  // Gets the latest value from the the second input field
  const handleSecondVal = (secondVal: string) => {
    if (secondVal) {
      setSecondValue(secondVal);
      console.log(secondVal);
    } else {
      setSecondValue("");
    }
  };

  // Resets inputs values
  const resetInputs = () => {
    setFirstValue("");
    setSecondValue("");
  };

  return (
    <div className="todo-items">
      <h1>Add todo item:</h1>
      <TextField
        type="text"
        size="small"
        label="Title"
        variant="outlined"
        value={firstValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFirstVal(e.target.value)
        }
      />
      <TextField
        type="text"
        value={secondValue}
        size="small"
        label="Description"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSecondVal(e.target.value)
        }
      />
      <Button
        onClick={() => {
          dispatch(addItem(initialValue));
          resetInputs();
        }}
        size="small"
        variant="contained"
      >
        ADD
      </Button>
    </div>
  );
};
