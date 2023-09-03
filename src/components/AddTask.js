import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddClick = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      dispatch(
        addTask({
          id: new Date().getTime(),
          description,
          isDone: false,
        })
      );
      setDescription('');
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleAddClick}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
      <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
};

export default AddTask;
