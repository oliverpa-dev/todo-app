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

  return (
    <div className="todo-items">
      <div className="todo-items__heading">Add a new todo</div>
      <div className="todo-items__copy">
        <label>Fill in the title</label>
        <input
          type="text"
          value={firstValue}
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
      </div>
      <div className="todo-items__copy">
        <label>Feel in the description</label>
        <input
          type="text"
          value={secondValue}
          onChange={(e) => {
            setSecondValue(e.target.value);
          }}
        />
      </div>
      <button onClick={() => dispatch(addItem(initialValue))}>Add</button>
    </div>
  );
};
