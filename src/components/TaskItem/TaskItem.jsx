import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../redux/tasks/tasksSlice';
import {
  TaskListItem,
  TaskName,
  TaskDescription,
  ActionButton,
  DeleteButton,
  TaskDate,
} from './TaskItem.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TaskItem = ({ date }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(completeTask(date.id));
    Notify.success('Status of the task was changed!');
  };

  const handleDelete = () => {
    dispatch(deleteTask(date.id));
    Notify.success('Task was deleted!');
  };

  return (
    <TaskListItem key={date.id} completed={date.completed ? 'true' : 'false'}>
      <div>
        <TaskName>{date.name}</TaskName>
        <TaskDescription>{date.description}</TaskDescription>
      </div>
      <div>
        <ActionButton onClick={handleToggleCompletion}>
          {date.completed ? 'Mark Incomplete' : 'Complete'}
        </ActionButton>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <>
          {date.dueDate !== '' ? (
            <TaskDate>Need to be completed till: {date.dueDate}</TaskDate>
          ) : null}
        </>
      </div>
    </TaskListItem>
  );
};

export default TaskItem;
