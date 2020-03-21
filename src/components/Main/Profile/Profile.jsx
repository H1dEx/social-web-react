import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import About from './About/About';

const Profile = (props) => {
    return (
        <section>
            <About />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
	</section>
    )
}
export default Profile