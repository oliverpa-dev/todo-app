import React from "react";
import { Paper } from "@mui/material";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <Paper>{children}</Paper>;
};
