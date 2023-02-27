import editImg from '../icons/edit.png'
import deleteImg from '../icons/delete.png'

import '../styles/modifycontentbuttons.css';

export default function ModifyContentButtons({ task, setTasks, selectedTaskStatus, setSelectedTaskStatus }) {

    const handleUpdateTask = () => {
        if (!selectedTaskStatus  || selectedTaskStatus === 'Changer l\'état') {
            return;
        }
        const updateTask = async () => {
            const response = await fetch(`/api/tasks/${task._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: task.name,
                    status: selectedTaskStatus,
                })
            });

            if (response.ok) {
                setTasks((prevTasks) => prevTasks.map(
                    (t) => t._id === task._id ? { ...t, status: selectedTaskStatus } : t
                ));
                setSelectedTaskStatus(null);
            }
        }

        updateTask();
    }

    const handleDeleteTask = () => {
        const deleteTask = async () => {
            const response = await fetch(`/api/tasks/${task._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTasks((prevTasks) => prevTasks.filter(
                    (t) => t._id !== task._id
                ));
            }
        }

        deleteTask();
    }

    return (
        <div className='tdl-modify-buttons'>
            <img src={editImg} alt='edit button' className='tdl-img img-button' onClick={handleUpdateTask}/>
            <img src={deleteImg} alt='delete button' className='tdl-img img-delete' onClick={handleDeleteTask}/>
        </div>
    );
}