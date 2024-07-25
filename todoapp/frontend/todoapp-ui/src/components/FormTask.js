import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import './FormTask.css';

const FormTask = ({ todoAPI }) => {
    const [taskInput, setTaskInput] = useState('');

    const sendTaskPost = async () => {
        await axios.post('http://localhost:4000/', { task: taskInput })
    };

    const sendTaskHandler = (e) => {
        e.preventDefault();
        sendTaskPost();
        todoAPI();
        setTaskInput('');
    };

    return (
        <form className="form__" onSubmit={(e) => sendTaskHandler(e)}>
            <input className="task_input" type="text" name="task" onChange={(e) => setTaskInput(e.target.value)} value={taskInput} placeholder="Enter your new task" required/>
            <button className="task_btn" type="submit">
            <IoMdAdd style={{ fontSize: '20px' }}/>
            </button>
        </form>
    )
}

export default FormTask;