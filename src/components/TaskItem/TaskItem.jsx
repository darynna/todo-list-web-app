import React from 'react';

const TaskItem = ({ date }) => {
  return (
    <li key={date.id}>
      <div>
        <h3>{date.name}</h3>
      </div>
      <div className="task-details">
        <p>{date.description}</p>
        <button>Complete!</button>
      </div>
    </li>
  );
};

export default TaskItem;