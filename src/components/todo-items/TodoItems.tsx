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
      <TextField
        type="text"
        id="standard-basic"
        size="small"
        label="Standard"
        variant="outlined"
        value={firstValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFirstVal(e.target.value)
        }
      />
      <TextField
        type="text"
        value={secondValue}
        id="standard-basic"
        size="small"
        label="Standard"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSecondVal(e.target.value)
        }
      />
      <button onClick={() => dispatch(addItem(initialValue))}>Add</button>
    </div>
  );
};
