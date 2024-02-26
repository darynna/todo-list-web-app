import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  tasks: [],
  completedTasks: [],
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
        state.completedTasks.push(state.tasks[taskIndex]);
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;