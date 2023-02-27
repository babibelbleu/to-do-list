import '../styles/tasklist.css';
import Status from './Status';
import ModifyContentButtons from './ModifyContentButtons';
import StateList from './StateList';
import CreateTaskButton from './CreateTaskButton';

import { useState, useEffect } from 'react';
import NewTaskStatus from './NewTaskStateList';
import CreateTaskOption from './CreateTaskOption';

export default function TaskList({tasks, setTasks}) {

    const [selectedTaskStatus, setSelectedTaskStatus] = useState(null);

    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState('');

    const [isNewTask, setIsNewTask] = useState(false);

    useEffect(() => {
        const fetchTasks = async() => {
            const response = await fetch('/api/tasks');
            const data = await response.json();

            if(response.ok){
                setTasks(data);
            }
        }

        fetchTasks();
    }
    , []);


    const handlerTaskName = (e) => {
        setNewTaskName(e.target.value);
    }

    return (
        <div className="tdl-tasklist">
            <table>
                <thead>
                    <tr>
                        <th colSpan={1}>Tâche</th>
                        <th colSpan={1}>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={!isNewTask ? 'tdl-hidden' : ''}>
                        <td>
                            <input type="text" placeholder="Nom de tâche" className="tdl-input input-add" onChange={handlerTaskName}/>
                        </td>
                        <td className='tdl-state-container'>
                            <Status taskStatus={''}/>
                            <NewTaskStatus setNewTaskStatus={setNewTaskStatus}/>
                            <CreateTaskButton taskName={newTaskName} taskStatus={newTaskStatus} tasks={tasks} setTasks={setTasks} setIsNewTask={setIsNewTask} />
                        </td>
                    </tr>
                    {tasks && tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.name}</td>
                            <td className='tdl-state-container'>
                                <Status taskStatus={task.status}/>
                                <StateList setSelectedTaskStatus={setSelectedTaskStatus} />
                                <ModifyContentButtons task={task} selectedTaskStatus={selectedTaskStatus} setTasks={setTasks} setSelectedTaskStatus={setSelectedTaskStatus} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CreateTaskOption setIsNewTask={setIsNewTask}/>
        </div>
    );
}