import TasksList from "components/TasksList/TasksList";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";
import EmptyPageComponent from "components/EmptyPageComponent/EmptyPageComponent";

const NotCompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);

    const notcompletedTasks = tasksArray.filter(task => !task.completed);

    return(
        <>
        {notcompletedTasks.length === 0 ? (
          <EmptyPageComponent text={"You haven't added any tasks here yet. Use the form to create new tasks and start organizing your to-do list!"}/>
        ) : (
          <TasksList array={notcompletedTasks} />
        )}
      </>
    )
    
}

export default NotCompletedTasksPage