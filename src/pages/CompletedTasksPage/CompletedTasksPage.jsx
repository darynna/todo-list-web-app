import TasksList from "components/TasksList/TasksList";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";
import EmptyPageComponent from "components/EmptyPageComponent/EmptyPageComponent";
import TaskSearch from "components/TaskSearch/TaskSearch";
import { selectFilter } from "../../redux/tasks/tasksSelectors";
import TaskPageTitle from "components/TaskPagesTitle/TaskPagesTitle";

const CompletedTasksPage = () => {
    const tasksArray = useSelector(selectTasks);
    const filter = useSelector(selectFilter)

    const completedTasks = tasksArray.filter(task => task.completed && task.name.toLowerCase().includes(filter.toLowerCase()));

    return(
        <>
        <TaskPageTitle text={'Completed Tasks:'}/>
        <TaskSearch/>
        {completedTasks.length === 0 ? (
          <EmptyPageComponent text={"You haven't completed any tasks yet. Keep working on your to-do list and mark tasks as complete when you're finished!"}/>
        ) : (
          <TasksList array={completedTasks} />
        )}
      </>
    )
}

export default CompletedTasksPage