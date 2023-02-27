import STATES from "../enums/TaskState";

import '../styles/status.css';

export default function Status({taskStatus}) {
    switch(taskStatus){
        case STATES.TODO:
            return <div className="tdl-status todo">{STATES.TODO}</div>;
        case STATES.IN_PROGRESS:
            return <div className="tdl-status in-progress">{STATES.IN_PROGRESS}</div>;
        case STATES.DONE:
            return <div className="tdl-status done">{STATES.DONE}</div>;
        case STATES.LATE:
            return <div className="tdl-status late">{STATES.LATE}</div>;
        default:
            return <div className="tdl-status">?</div>
    }
}