import React from 'react';

const TaskForm = (props) => {
  return (
    <form className='task-form'>
      <input
        className='task-input'
        type='text'
        placeholder='Write down your task here'
        name='text'
      />
      <button className='task-button'>Add task to the list</button>
    </form>
  );
};

export default TaskForm;
