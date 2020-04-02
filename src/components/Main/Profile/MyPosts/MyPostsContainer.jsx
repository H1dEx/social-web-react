import React from 'react';
import {addPostActionCreator, updatePostValueActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        updateNewPostText: (value) => dispatch(updatePostValueActionCreator(value)),
        addPost: (value) => dispatch(addPostActionCreator(value))
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;