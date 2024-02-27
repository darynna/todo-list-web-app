import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  tasks: []
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    completeTask: (state, action) => {
        const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
        if (taskIndex !== -1) {
          state.tasks[taskIndex].completed = true;
        }
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;