import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profileReducer";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getProfile}),
    withAuthRedirect
)(ProfileContainer)

