import React from "react";
import { storeSelector } from "./app/slice/todoSlice";
import { useAppSelector } from "./app/hooks";

export const List: React.FC = () => {
  const items = useAppSelector(storeSelector);
  return (
    <div className="todo-items">
      <div className="todo-items__heading">Your list of todos</div>
      {items.map((item) => (
        <div key={item.id} className="todo-items__copy">
          <div className="todo-items__copy__title">{item.title}</div>
          <div className="todo-items__copy__description">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};
