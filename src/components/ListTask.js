import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, toggleTask, editTask } from '../sotore/sclise';

const ListTask = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleFilterClick = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = (taskId, newDescription) => {
    dispatch(editTask({ id: taskId, description: newDescription }));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'notDone') {
      return !task.isDone;
    }
    return true;
  });

  return (
    <div className="task-list">
      <div>
        <button onClick={() => handleFilterClick('all')}>All</button>
        <button onClick={() => handleFilterClick('done')}>Done</button>
        <button onClick={() => handleFilterClick('notDone')}>Not Done</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => handleEditTask(task.id, prompt('Edit task:', task.description))}>
              Edit
            </button>
            <button onClick={() => handleToggleTask(task.id)}>
              {task.isDone ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
