import React from "react";
import { storeSelector } from "../app/slice/todoSlice";
import { useAppSelector } from "../app/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "./main.scss";

export const List: React.FC = () => {
  const items = useAppSelector(storeSelector);
  return (
    <div className="todo-list">
      <div className="todo-list__heading">Your list of todos</div>
      {items.map((item) => (
        <div key={item.id} className="todo-list__copy">
          <div className="todo-list__copy__title">{item.title}</div>
          <div className="todo-list__copy__description">{item.description}</div>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
