import React from 'react';
import Substrate from './Substrate/Substrate';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const About = (props) => {
    return (
        <div>
            <Substrate/>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};

export default About;