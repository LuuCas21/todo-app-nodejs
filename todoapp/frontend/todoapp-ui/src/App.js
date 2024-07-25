import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS
import FormTask from './components/FormTask';
import TaskGallery from './components/TaskGallery';

const App =() => {
  const [task, setTask] = useState([]);

  const todoAPI = async () => {
    const { data } = await axios.get('http://localhost:4000/');
    setTask(data.task);
  };

  // FETCHING API
  useEffect(() => {
    todoAPI();
  }, []);

  return (
    <div className="wrapper">
      <FormTask todoAPI={todoAPI}/>
      <TaskGallery task={task} todoAPI={todoAPI}/>
    </div>
  );
}

export default App;
