import TasksList from "components/TasksList/TasksList";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";

const CompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);
    return(
        <TasksList array={tasksArray}/>
    )
}

export default CompletedTasksPage