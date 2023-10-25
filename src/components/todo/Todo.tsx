import React from "react";
import { TodoItems } from "../todo-items/TodoItems";
import { List } from "../list/List";
import "./main.scss";
import { Paper } from "@mui/material";

export const Todo = () => {
  return (
    <div className="todo">
      <Paper elevation={24}>
        <TodoItems />
        <List />
      </Paper>
    </div>
  );
};
