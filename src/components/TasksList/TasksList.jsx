import TaskItem from "components/TaskItem/TaskItem";
import { TaskList } from "./TasksList.styled";

const TasksList = ({array}) => {

  return (
    <TaskList>
      {array.length !== 0 &&
        array.map((date) => {

          return (
            <TaskItem key={date.id} date={date} 
            />
          );
        })}
    </TaskList>
  );
};

export default TasksList;