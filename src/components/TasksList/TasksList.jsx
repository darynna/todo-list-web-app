import TaskItem from "components/TaskItem/TaskItem";

const TasksList = ({array}) => {

  return (
    <ul>
      {array.length !== 0 &&
        array.map((date) => {

          return (
            <TaskItem key={date.id} date={date}
            />
          );
        })}
    </ul>
  );
};

export default TasksList;