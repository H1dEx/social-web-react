import React from 'react';
import {addPostActionCreator, updatePostValueActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState(),
    textChange = (value) => props.store.dispatch(updatePostValueActionCreator(value)),
    addPost = (value) => props.store.dispatch(addPostActionCreator(value));

    return <MyPosts updateNewPostText={textChange} profilePage={state.profilePage} addPost={addPost} />
};

export default MyPostsContainer;