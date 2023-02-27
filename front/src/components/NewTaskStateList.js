import STATES from "../enums/TaskState";

export default function NewTaskStatus({setNewTaskStatus}){
    const handlerNewTaskStatus = (e) => {
        setNewTaskStatus(e.target.value);
    }

    return (
        <select className="tdl-select select-add" onChange={handlerNewTaskStatus}>
            <option>Changer l'état</option>
            <option>{STATES.TODO}</option>
            <option>{STATES.IN_PROGRESS}</option>
            <option>{STATES.DONE}</option>
            <option>{STATES.LATE}</option>
        </select>
    );
}