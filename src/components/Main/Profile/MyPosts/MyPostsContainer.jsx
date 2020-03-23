import React from 'react';
import {addPostActionCreator, updatePostValueActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
            let state = store.getState(),
                textChange = (value) => store.dispatch(updatePostValueActionCreator(value)),
                addPost = (value) => store.dispatch(addPostActionCreator(value));
            return <MyPosts updateNewPostText={textChange} profilePage={state.profilePage}
                            addPost={addPost}/>
        }}</StoreContext.Consumer>)
};

export default MyPostsContainer;