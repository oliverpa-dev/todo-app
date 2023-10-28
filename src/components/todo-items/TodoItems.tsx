import React, { useState } from "react";
import "./main.scss";
import { addItem } from "../app/slice/todoSlice";
import { useAppDispatch } from "../app/hooks";
import { InitialState } from "../app/slice/todoSlice";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

interface Items {
  type: string;
  size: "small";
  label: string;
  variant: "outlined";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

  const fields: Items[] = [
    {
      type: "text",
      size: "small",
      label: "Title",
      variant: "outlined",
      value: firstValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFirstVal(e.target.value);
      },
    },
    {
      type: "text",
      size: "small",
      label: "Description",
      variant: "outlined",
      value: secondValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSecondVal(e.target.value);
      },
    },
  ];

  return (
    <div className="todo-items">
      <h1>Add todo item:</h1>
      {fields.map((item) => {
        if(item.label === '   ')
      }
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
