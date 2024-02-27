import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask } from "../../redux/tasks/tasksSlice";

const TaskItem = ({ date }) => {
  const dispatch = useDispatch();

const handleToggleCompletion = () => {
  dispatch(completeTask(date.id)); 
};

  return (
    <li key={date.id}>
      <div>
        <h3>{date.name}</h3>
      </div>
      <div className="task-details">
        <p>{date.description}</p>
        <button onClick={handleToggleCompletion}>
          {date.completed ? 'Mark Incomplete' : 'Complete'}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;