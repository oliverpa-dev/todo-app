import React, { useState } from "react";
import "./todoitems.scss";
import { addItem } from "./app/slice/todoSlice";
import { useAppDispatch } from "./app/hooks";
import { InitialState } from "./app/slice/todoSlice";

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
      <div className="todo-items__heading">Add a new todo</div>
      <div className="todo-items__copy">
        <label>Fill in the title</label>
        <input
          type="text"
          value={firstValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // setFirstValue(e.target.value);
            handleFirstVal(e.target.value);
          }}
        />
      </div>
      <div className="todo-items__copy">
        <label>Feel in the description</label>
        <input
          type="text"
          value={secondValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // setSecondValue(e.target.value);
            handleSecondVal(e.target.value);
          }}
        />
      </div>
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
