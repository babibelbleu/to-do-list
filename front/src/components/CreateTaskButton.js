import '../styles/createtaskbutton.css'

export default function CreateTaskButton({taskName, taskStatus, tasks, setTasks, setIsNewTask}){

    const handlerAddTaskButton = () => {
        const addTask = async() => {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: taskName,
                    status: taskStatus
                })
            });

            if(response.ok){
                const data = await response.json();
                setTasks([data, ...tasks]);
            }
        }
        addTask();
        setIsNewTask(false);
    }

    return (
        <div className="tdl-btn btn-add" onClick={handlerAddTaskButton}>Ajouter</div>
    );
}