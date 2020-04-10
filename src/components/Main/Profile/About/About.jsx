import React from 'react';
import Substrate from './Substrate/Substrate';
import Info from './ProfileInfo/Info';

const About = (props) => {
    return (
        <div>
            <Substrate/>
            <Info profile={props.profile} />
        </div>
    )
};

export default About;