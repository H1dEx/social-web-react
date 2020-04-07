import React, {Component} from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(this.props.pageSize, p);
    };

    render() {

        return (
            <> {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChange={this.onPageChange}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
};


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);



