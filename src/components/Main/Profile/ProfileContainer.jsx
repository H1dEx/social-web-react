import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus, savePhoto, clearProfile, saveProfile} from "../../../redux/profileReducer.ts";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        
    }
    
    componentDidMount() {
        this.refreshProfile()
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId === this.props.match.params.userId) return
        this.props.clearProfile();
        this.refreshProfile();
    }
    
    componentWillUnmount() {
        this.props.clearProfile()
    }
    
    render() {
        if (!this.props.profile) return (<Preloader/>)
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, clearProfile, saveProfile}),
    withAuthRedirect
)(ProfileContainer)

