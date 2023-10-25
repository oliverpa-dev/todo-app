import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface InitialState {
  title: string;
  description: string;
  id: number;
}

const initialState: InitialState[] = [
  {
    title: "Hello",
    description: "This is a nice description",
    id: Math.random(),
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<InitialState>) => {
      if (
        action.payload.title.length > 0 &&
        action.payload.description.length > 0
      )
        state.push(action.payload);
    },
  },
});

export const { addItem } = todoSlice.actions;
export const storeSelector = (state: RootState) => state.todo;
export default todoSlice.reducer;
