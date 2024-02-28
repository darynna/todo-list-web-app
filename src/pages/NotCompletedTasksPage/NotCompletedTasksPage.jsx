import TasksList from 'components/TasksList/TasksList';
import { useSelector } from 'react-redux';
import { selectVisibleNotCompletedTasks } from '../../redux/tasks/tasksSelectors';
import EmptyPageComponent from 'components/EmptyPageComponent/EmptyPageComponent';
import TaskSearch from 'components/TaskSearch/TaskSearch';
import TaskPageTitle from 'components/TaskPagesTitle/TaskPagesTitle';

const NotCompletedTasksPage = () => {
  const visibleNotCompletedTasks = useSelector(selectVisibleNotCompletedTasks);

  return (
    <>
      <TaskPageTitle text={'Not Completed Tasks:'} />
      <TaskSearch />
      {visibleNotCompletedTasks.length === 0 ? (
        <EmptyPageComponent
          text={
            "You haven't added any tasks here yet. Use the form to create new tasks and start organizing your to-do list!"
          }
        />
      ) : (
        <TasksList array={visibleNotCompletedTasks} />
      )}
    </>
  );
};

export default NotCompletedTasksPage;
