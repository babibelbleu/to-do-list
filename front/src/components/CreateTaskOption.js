import addIcon from '../icons/add.png';

import '../styles/createtaskoption.css';

export default function CreateTaskOption({setIsNewTask}){

    const handleSetNewTask = () => {
        setIsNewTask(true);
    }

    return (
        <div className="tdl-create-task" onClick={handleSetNewTask}>
            <img src={addIcon} alt="add task" className="tdl-img img-add"/>
            <span className="tdl-span span-add">Ajouter une tâche</span>
        </div>
    );
}