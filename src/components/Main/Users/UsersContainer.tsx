import React, {Component} from "react";
import {connect} from "react-redux";
import {actions, requestUsers, unfollow, followThunk} from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../../redux/usersSelectors";
import {UserType} from "../../../types/types";
import {AppStateType} from "../../../redux/reduxStore";

const {setCurrentPage} = actions;

type MapStatePropsType = {
    isFetching: boolean
    followingInProgress: Array<number>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UserType>
}

type MapDispatchPropsType = {
    followThunk: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (pageSize: number, pageNumber: number) => void
    setCurrentPage: (pageNumber: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageChange = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.requestUsers(this.props.pageSize, p);
    };

    render() {
        return (
            <> {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChange={this.onPageChange}
                       follow={this.props.followThunk}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    followThunk,
    unfollow,
    setCurrentPage,
    requestUsers,
}), withAuthRedirect)(UsersContainer);



