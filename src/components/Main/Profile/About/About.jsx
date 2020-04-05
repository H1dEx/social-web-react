import React from 'react';
import Substrate from './Substrate/Substrate';
import Info from './Info/Info';

const About = (props) => {
    return (
        <div>
            <Substrate/>
            <Info profile={props.profile}/>
        </div>
    )
};

export default About;