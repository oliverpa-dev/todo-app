import React from "react";
import "./todoitems.scss";
import { addItem } from "./app/slice/todoSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";

export const TodoItems: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="todo-items">
      <div className="todo-items__heading">Add a new todo</div>
      <div className="todo-items__copy">
        <label>Fill in the title</label>
        <input type="text" />
      </div>
      <div className="todo-items__copy">
        <label>Feel in the description</label>
        <input type="text" />
      </div>
      <button onClick={() => dispatch(addItem())}>Add</button>
    </div>
  );
};
