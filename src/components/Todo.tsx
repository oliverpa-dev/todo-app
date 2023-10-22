import React from "react";
import { TodoItems } from "./TodoItems";
import { List } from "./List";
import "./todo.scss";

export const Todo = () => {
  return (
    <div className="todo">
      <TodoItems />
      <List />
    </div>
  );
};
