import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../redux/profileReducer";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends Component {
  state = {
    loading: false
  }

  refreshProfile() {
    this.setState({loading: true})
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
    this.setState({loading: false})
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId)
      this.refreshProfile();
  }

  render() {
    if (this.state.loading) return <Preloader/>
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status}
               updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}/>
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
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withAuthRedirect
)(ProfileContainer)

