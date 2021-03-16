import React, { useEffect, useState } from 'react'

type PropsType = {
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true)
    }
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value)
  }

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || 'No status'}
          </span>
        </div>
      ) : (
        <div>
          <input
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
            autoFocus
          />
        </div>
      )}
    </>
  )
}

export default ProfileStatusWithHooks
