import React, {useState} from 'react';
import styles from './Info.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataForm} from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) return (<Preloader/>);
  let profile = props.profile;

  const isNull = (param, result) => {
    return (param === null) ? null : <div>{result + param}</div>
  };

  const onPhotoSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      props.savePhoto(file)
    }
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {(profile.photos.large == null)
          ? <img src={require('./cat.jpg')}/>
          : <img src={profile.photos.large}/>
        }</div>
      {props.isOwner && (<input type="file" onChange={onPhotoSelect}/>)}

      <div className={styles.info}>
        <button onClick={toggleEditMode}>{editMode ? 'Save' : 'Settings'}</button>
        <div className={styles.name}>{profile.fullName}</div>

        {isNull(profile.aboutMe, 'About me: ')}

        {props.isOwner && (editMode ? <ProfileDataForm contacts={profile.contacts}/> : <ProfileData contacts={profile.contacts}/>)}
        <hr/>
        <div>
          Looking for a job? - {(profile.lookingForAJob) ? "Yes" : 'No'}</div>
        {isNull(profile.lookingForAJobDescription, `Looking for a job description: `)}
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
    </div>
  )
};

const ProfileData = ({contacts}) => {
  let contactsArr = [];

  for (let key in contacts) {
    if (contacts[key] !== null && contacts[key] !== '') {
      contactsArr.push(<div>{key + ': ' + contacts[key]}</div>)
    }
  }
  return (
    <ul className={styles.about}>
      {contactsArr}
    </ul>
  )
}

export default ProfileInfo;
