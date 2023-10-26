import React, { useState } from "react";
import "./main.scss";
import { addItem } from "../app/slice/todoSlice";
import { useAppDispatch } from "../app/hooks";
import { InitialState } from "../app/slice/todoSlice";
import { TextField } from "@mui/material";

export const TodoItems: React.FC = () => {
  const dispatch = useAppDispatch();

  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");

  const initialValue: InitialState = {
    title: firstValue,
    description: secondValue,
    id: Math.random(),
  };

  const handleFirstVal = (firstVal: string) => {
    if (firstVal) {
      setFirstValue(firstVal);
      console.log(firstVal);
    } else {
      setFirstValue("");
    }
  };

  const handleSecondVal = (secondVal: string) => {
    if (secondVal) {
      setSecondValue(secondVal);
      console.log(secondVal);
    } else {
      setSecondValue("");
    }
  };

  return (
    <div className="todo-items">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <button onClick={() => dispatch(addItem(initialValue))}>Add</button>
      <button
        onClick={() => {
          handleFirstVal(firstValue);
          handleSecondVal(secondValue);
        }}
      ></button>
    </div>
  );
};
