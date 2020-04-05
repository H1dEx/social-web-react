import About from "./About/About";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
    return (
        <section>
            <About profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    )
};

export default Profile;