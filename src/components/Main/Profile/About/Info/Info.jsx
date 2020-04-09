import React from 'react';
import styles from './Info.module.css';
import Preloader from "../../../../common/Preloader/Preloader";


const Info = (props) => {
    if (!props.profile) return (<Preloader/>);
    let profile = props.profile;

    const isNull = (param, result) => {
        return (param === null) ? null : <div>{result + param}</div>
    };

    let contactsArr = [];

    for (let key in profile.contacts) {
        if (profile.contacts[key] !== null && profile.contacts[key] !== '') {
            contactsArr.push(<div>{key + ': ' + profile.contacts[key]}</div>)
        }
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.avatar}>
                {(profile.photos.large == null)
                    ? <img src={require('./cat.jpg')}/>
                    : <img src={profile.photos.large}/>
                }</div>

            <div className={styles.info}>
                <div className={styles.name}>{profile.fullName}</div>

                {isNull(profile.aboutMe, 'About me: ')}

                <ul className={styles.about}>
                    {contactsArr}
                </ul>

                <hr/>
                <div>Looking for a job? - {(profile.lookingForAJob) ? "Yes" : 'No'}</div>

                {isNull(profile.lookingForAJobDescription, `Looking for a job description: `)}
            </div>
        </div>
    )
};

export default Info;
