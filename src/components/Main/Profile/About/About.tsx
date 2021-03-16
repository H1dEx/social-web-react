import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { ProfileType } from '../../../../types/types'
import { Avatar } from '../Avatar/Avatar'
import styles from './About.module.css'

type PropsType = {
  profile: ProfileType
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (photo: any) => void
}

const About = ({
  updateStatus,
  status,
  savePhoto,
  isOwner,
  profile,
}: PropsType) => {
  const [editMode, setEditMode] = useState(false)

  const onPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    savePhoto(e.target.files[0])
  }
  return (
    <div className={styles.wrapper}>
      <Avatar
        isOwner={isOwner}
        photos={profile.photos}
        onPhotoSelect={onPhotoSelect}
        editMode={editMode}
        setEditMode={setEditMode}
      />

      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  )
}

export default About
