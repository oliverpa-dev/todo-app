import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  items: {
    title: string;
    description: string;
  }[];
}

const initialState: InitialState = {
  items: [
    {
      title: "First task",
      description: "Description of the first task",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.push({
        title: "Second Task",
        description: "Description of the second task",
      });
    },
  },
});

export const { addItem } = todoSlice.actions;
export const storeSelector = (state: RootState) => state.todo.items;
export default todoSlice.reducer;
