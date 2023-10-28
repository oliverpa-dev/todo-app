import React from "react";
import { Paper } from "@mui/material";
import "./main.scss";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="todo-content">
      <Paper style={{ padding: "5rem" }}>{children}</Paper>
    </div>
  );
};
