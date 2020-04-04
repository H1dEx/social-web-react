import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../../redux/usersReducer";

let mapStateToProps = (state) =>{
    return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
    },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount));
    }}
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;

