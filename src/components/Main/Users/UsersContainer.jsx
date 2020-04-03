import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../redux/usersReducer";

let mapStateToProps = (state) =>{
    return {
            users: state.usersPage.users
        }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
        }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;
