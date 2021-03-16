import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Profile from './Profile'
import {
  getProfile,
  getStatus,
  savePhoto,
  updateStatus,
} from '../../../redux/profileReducer'
import { withAuthRedirect } from '../../../hoc/AuthRedirect'
import Preloader from '../../common/Preloader/Preloader'
import { AppStateType } from '../../../redux/reduxStore'
import { ProfileType } from '../../../types/types'

type MapStatePropsType = {
  profile: ProfileType | null
  status: string
  id: number | null
}
type MapDispatchPropsType = {
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: any) => void
}
type MatchParam = {
  userId?: string
}

type PropsType = MapStatePropsType &
  MapDispatchPropsType &
  RouteComponentProps<MatchParam>

class ProfileContainer extends Component<PropsType> {
  state = {
    loading: false,
  }

  refreshProfile() {
    this.setState({ loading: true })
    let userId = this.props.match.params.userId
      ? +this.props.match.params.userId
      : null
    if (!userId) {
      userId = this.props.id
    }
    if (userId) {
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    }
    this.setState({ loading: false })
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    if (this.state.loading) return <Preloader />
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
})

export default compose(
  withRouter,
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      getProfile,
      getStatus,
      updateStatus,
      savePhoto,
    }
  ),
  withAuthRedirect
)(ProfileContainer)
