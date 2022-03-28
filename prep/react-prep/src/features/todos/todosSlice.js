import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],

  nextId: 1,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.unshift(action.payload);
      state.nextId++;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
