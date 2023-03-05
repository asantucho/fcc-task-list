import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ text, fulfilled }) => {
  return (
    <div className={fulfilled ? 'task-container fulfilled' : 'task-container'}>
      <div className='task-text'>{text}</div>
      <div className='task-icon'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
};

export default Task;
