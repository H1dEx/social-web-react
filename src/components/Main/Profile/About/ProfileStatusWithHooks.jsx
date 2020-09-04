import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    return (
        <>
            {(!editMode)
                ? <div>
                    <span onDoubleClick={activateEditMode}>{status || "type something..."}</span>
                </div>
                : <div>
                    <input value={status}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           onChange={onStatusChange}
                    />
                </div>}
        </>
    )
    
}

export default ProfileStatusWithHooks;