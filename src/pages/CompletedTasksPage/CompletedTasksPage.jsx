import TasksList from "components/TasksList/TasksList";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";

const CompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);

    const completedTasks = tasksArray.filter(task => task.completed);

    return(
        <TasksList array={completedTasks}/>
    )
}

export default CompletedTasksPage