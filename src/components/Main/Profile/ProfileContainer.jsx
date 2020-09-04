import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus, savePhoto, clearProfile} from "../../../redux/profileReducer";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId
        }
    }
    
    componentDidMount() {
        let userId = this.state.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.userId === this.props.match.params.userId) return
        this.setState({userId: this.props.match.params.userId})
        this.props.clearProfile();
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentWillUnmount() {
        this.props.clearProfile()
    }
    
    render() {
        if (!this.props.profile) return (<Preloader/>)
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, clearProfile}),
    withAuthRedirect
)(ProfileContainer)

