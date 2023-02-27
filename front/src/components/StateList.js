import STATES from "../enums/TaskState"

export default function StateList({ setSelectedTaskStatus }) {

    const handleStatusChanged = (event) => {
        setSelectedTaskStatus(event.target.value);
    }

    return (
        <div className="tdl-state-list">
            <select onChange={handleStatusChanged}>
                <option>Changer l'état</option>
                <option>{STATES.TODO}</option>
                <option>{STATES.IN_PROGRESS}</option>
                <option>{STATES.DONE}</option>
                <option>{STATES.LATE}</option>
            </select>
        </div>
    )
}