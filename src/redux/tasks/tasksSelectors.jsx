import { createSelector } from '@reduxjs/toolkit';
export const selectTasks = state => state.tasks.tasks;
export const selectFilter = state => state.tasks.searchFilter;

export const selectVisibleCompletedTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    return tasks.filter(
      task =>
        task.completed && task.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectVisibleNotCompletedTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    return tasks.filter(
      task =>
        !task.completed &&
        task.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
