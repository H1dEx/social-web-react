import React, { useEffect, useState } from 'react'
import styles from './Info.module.css'
import Preloader from '../../../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatus'
import { ProfileDataForm } from './ProfileDataForm'
import { ContactsType, ProfileType } from '../../../../../types/types'
import { Avatar } from '../../Avatar/Avatar'

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (photo: any) => void
  editMode: boolean
  setEditMode: (isEdit: boolean) => void
}

const ProfileInfo = ({
  profile,
  isOwner,
  editMode,
  savePhoto,
  setEditMode,
  status,
  updateStatus,
}: PropsType) => {
  useEffect(
    () => () => {
      if (editMode) setEditMode(false)
    },
    [editMode, setEditMode]
  )

  if (!profile) return <Preloader />

  const isNull = (param: string | null, result: string) =>
    param === null ? null : <div>{result + param}</div>

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.name}>{profile.fullName}</div>

        {isOwner &&
          (editMode ? (
            <ProfileDataForm contacts={profile.contacts} />
          ) : (
            <ProfileData contacts={profile.contacts} />
          ))}
        <hr />
        <div>Looking for a job? - {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        {isNull(
          profile.lookingForAJobDescription,
          'Looking for a job description: '
        )}
      </div>
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
      />
    </div>
  )
}

const ProfileData = ({ contacts }: { contacts: ContactsType }) => {
  const contactsArr: React.ReactNode[] = []

  ;(Object.keys(contacts) as Array<keyof ContactsType>).forEach((key) => {
    if (contacts[key] !== null && contacts[key] !== '') {
      contactsArr.push(<div>{`${key}: ${contacts[key]}`}</div>)
    }
  })

  return <ul className={styles.about}>{contactsArr}</ul>
}

export default ProfileInfo
