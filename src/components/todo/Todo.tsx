import React from "react";
import { TodoItems } from "../todo-items/TodoItems";
import { List } from "../list/List";
import "./main.scss";
import { Content } from "../content/Content";

export const Todo: React.FC = () => {
  return (
    <div className="todo">
      <>
        <Content>
          <TodoItems />
        </Content>
        <Content>
          <List />
        </Content>
      </>
    </div>
  );
};
