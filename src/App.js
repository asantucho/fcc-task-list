import React from 'react';
import TaskList from './components/TaskList';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import './styles/styles.css';

function App() {
  return (
    <div className='task-app'>
      <div className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' />
      </div>
      <div className='main-task-list'>
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
