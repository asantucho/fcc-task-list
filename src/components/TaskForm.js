import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      fulfilled: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='Write down your task here'
        name='text'
        onChange={handleChange}
      />
      <button type='submit' className='task-button'>
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
