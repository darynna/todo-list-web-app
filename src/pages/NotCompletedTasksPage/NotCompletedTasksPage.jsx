import TasksList from "components/TasksList/TasksList";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";
import EmptyPageComponent from "components/EmptyPageComponent/EmptyPageComponent";
import TaskSearch from "components/TaskSearch/TaskSearch";
import { selectFilter } from "../../redux/tasks/tasksSelectors";
import TaskPageTitle from "components/TaskPagesTitle/TaskPagesTitle";

const NotCompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);
    const filter = useSelector(selectFilter)

    const notcompletedTasks = tasksArray.filter(task => !task.completed  && task.name.toLowerCase().includes(filter.toLowerCase()));

    return(
        <>
        <TaskPageTitle text={'Not Completed Tasks:'}/>
        <TaskSearch/>
        {notcompletedTasks.length === 0 ? (
          <EmptyPageComponent text={"You haven't added any tasks here yet. Use the form to create new tasks and start organizing your to-do list!"}/>
        ) : (
          <TasksList array={notcompletedTasks} />
        )}
      </>
    )
    
}

export default NotCompletedTasksPage