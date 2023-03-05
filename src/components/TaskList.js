import React from 'react';
import TaskForm from './TaskForm';

const TaskList = () => {
  return (
    <>
      <TaskForm />
      <div className='task-list-container'>Lista de tareas</div>
    </>
  );
};

export default TaskList;
