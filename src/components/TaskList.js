import React from 'react';
import TaskForm from './TaskForm';
import { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdate = [task, ...tasks];
      setTasks(tasksUpdate);
    }
  };

  const removeTask = (id) => {
    const tasksUpdate = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdate);
  };

  const fulfilledTask = (id) => {
    const tasksUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.fulfilled = !task.fulfilled;
      }
      return task;
    });
    setTasks(tasksUpdate);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            fulfilled={task.fulfilled}
            fulfilledTask={fulfilledTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
