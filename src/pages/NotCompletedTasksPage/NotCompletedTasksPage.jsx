import TasksList from "components/TasksList/TasksList";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";

const NotCompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);

    const notcompletedTasks = tasksArray.filter(task => !task.completed);

    return(
        <TasksList array={notcompletedTasks}/>
    )
    
}

export default NotCompletedTasksPage