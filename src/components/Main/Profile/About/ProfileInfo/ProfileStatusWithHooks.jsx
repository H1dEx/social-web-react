import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange=(event)=> {
        setStatus(event.target.value)
    }

    return (
        <>
            {(!editMode)
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                </div>
                : <div>
                    <input onBlur={deactivateEditMode} value={status} onChange={onStatusChange} autoFocus={true}/>
                </div>}
        </>
    )
}

export default ProfileStatusWithHooks;