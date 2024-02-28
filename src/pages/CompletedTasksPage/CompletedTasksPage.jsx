import TasksList from 'components/TasksList/TasksList';
import { useSelector } from 'react-redux';
import { selectVisibleCompletedTasks } from '../../redux/tasks/tasksSelectors';
import EmptyPageComponent from 'components/EmptyPageComponent/EmptyPageComponent';
import TaskSearch from 'components/TaskSearch/TaskSearch';
import TaskPageTitle from 'components/TaskPagesTitle/TaskPagesTitle';

const CompletedTasksPage = () => {
  const visibleCompletedTasks = useSelector(selectVisibleCompletedTasks);

  return (
    <>
      <TaskPageTitle text={'Completed Tasks:'} />
      <TaskSearch />
      {visibleCompletedTasks.length === 0 ? (
        <EmptyPageComponent
          text={
            "You haven't completed any tasks yet. Keep working on your to-do list and mark tasks as complete when you're finished!"
          }
        />
      ) : (
        <TasksList array={visibleCompletedTasks} />
      )}
    </>
  );
};

export default CompletedTasksPage;
