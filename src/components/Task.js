import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, fulfilled, fulfilledTask, removeTask }) => {
  return (
    <div className={fulfilled ? 'task-container fulfilled' : 'task-container'}>
      <div className='task-text' onClick={() => fulfilledTask(id)}>
        {text}
      </div>
      <div className='task-icon' onClick={() => removeTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
};

export default Task;
