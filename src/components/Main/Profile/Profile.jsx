import React from 'react';
import styles from './Profile.module.css';
import About from './About/About';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section>
            <About />
            <MyPostsContainer store={props.store} />
	</section>
    )
}
export default Profile