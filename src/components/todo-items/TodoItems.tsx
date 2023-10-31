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

  const { title, description } = initialValue;

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

  const handleOnClick = () => {
    if (firstValue.length > 0 && secondValue.length > 0) {
      dispatch(addItem(initialValue));
      resetInputs();
    }
  };

  return (
    <div className="todo-items">
      <h1>Add todo item:</h1>
      <TextField
        size="small"
        variant="outlined"
        label="Title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFirstVal(e.target.value)
        }
      />
      <TextField
        value={description}
        size="small"
        variant="outlined"
        label="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSecondVal(e.target.value)
        }
      />
      <Button onClick={handleOnClick} size="small" variant="contained">
        ADD
      </Button>
    </div>
  );
};
