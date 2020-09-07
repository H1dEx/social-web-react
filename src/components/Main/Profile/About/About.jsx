import React, {useState} from 'react';
import styles from "./About.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";
import catPhoto from '../../../../assets/cat.jpg'
import {ProfileInfoForm} from "./ProfileInfoForm";
import {reduxForm} from "redux-form";

const isNull = (param, result) => {
    return (param === null) ? null : <div>{result + param}</div>
};

const About = ({profile, status, updateStatus, savePhoto, isOwner, saveProfile}) => {
    const [editMode, changeMode] = useState(false);
    
    const selectFileHandler = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    
    const onSubmit = formData => {
        saveProfile(formData)
            .then(()=>changeMode(false))
    }
    
    let contactsArr = [];
    
    for (let key in profile.contacts) {
        if (profile.contacts[key] !== null && profile.contacts[key] !== '') {
            contactsArr.push(<div>{key + ': ' + profile.contacts[key]}</div>)
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                {(!profile.photos)
                    ? <img src={require('./cat.jpg')} alt="no logo"/>
                    : <img src={profile.photos.large || catPhoto} alt="profile logo"/>
                }
                {(isOwner)
                    ? (<label className={styles.label}> Update photo
                        <input type="file" className={styles.file} onChange={selectFileHandler}/>
                    </label>)
                    : ''}
            
            </div>
            <div className={styles.info}>
                {editMode
                    ? <ProfileFormFromReduxForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileInfo profile={profile}
                                   contactsArr={contactsArr}
                                   status={status}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}
                                   goToEditMode={() => changeMode(true)}
                    />}
            </div>
        
        </div>
    )
};

const ProfileInfo = ({profile, contactsArr, status, updateStatus, isOwner, goToEditMode}) => (
    <>
        <div className={styles.nameWrapper}>
            <span className={styles.name}>{profile.fullName}</span>
            {isOwner && <button
                className={styles.edit}
                onClick={goToEditMode}
            >Edit</button>}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        {isNull(profile.aboutMe, 'About me: ')}
        
        <hr/>
        <div>
            Looking for a job? - {(profile.lookingForAJob) ? "Yes" : 'No'}
        </div>
        <br/>
        
        {profile.lookingForAJob
        &&
        <div>
            <p>My professional skills:</p>
            {profile.lookingForAJobDescription}
        </div>
        }
        <br/>
        <ul className={styles.about}>
            {contactsArr.map(el => <span key={Math.floor(Math.random() * 929)}>{el}</span>)}
        </ul>
    </>
)

const ProfileFormFromReduxForm = reduxForm({form: 'profile-info'})(ProfileInfoForm)

export default About;