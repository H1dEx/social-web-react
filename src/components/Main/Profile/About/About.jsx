import React from 'react';
import styles from "./About.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";

const About = (props) => {
    let profile = props.profile;
    const isNull = (param, result) => {
        return (param === null) ? null : <div>{result + param}</div>
    };
    
    const selectFileHandler = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
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
                    : <img src={profile.photos.large} alt="profile logo"/>
                }
                {(props.isOwner) ? <input type="file" className={styles.file} onChange={selectFileHandler}/> : ''}
            </div>
            
            
            <div className={styles.info}>
                <div className={styles.name}>{profile.fullName}</div>
                
                {isNull(profile.aboutMe, 'About me: ')}
                
                <ul className={styles.about}>
                    {contactsArr}
                </ul>
                
                <hr/>
                <div>
                    
                    Looking for a job? - {(profile.lookingForAJob) ? "Yes" : 'No'}</div>
                <br/>
                
                
                {profile.lookingForAJob
                &&
                <div>
                    <p>My professional skills:</p>
                    {profile.lookingForAJobDescription}
                </div>
                }
                <br/>
                <div>
                    Contacts:
                </div>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};
const Contact = ({title, value}) => {
    return <div>
        <b>
            {title}
        </b> :
        {value}
    </div>
}

export default About;