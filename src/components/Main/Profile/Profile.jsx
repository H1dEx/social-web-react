import React from 'react';
import styles from './Profile.module.css';
import About from './About/About';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section>
            <About />
            <MyPostsContainer/>
	</section>
    )
}
export default Profile