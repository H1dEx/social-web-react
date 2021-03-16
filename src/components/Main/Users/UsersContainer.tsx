import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { follow, requestUsers, unfollow } from '../../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { withAuthRedirect } from '../../../hoc/AuthRedirect'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../../redux/usersSelectors'
import { UserType } from '../../../types/types'
import { AppStateType } from '../../../redux/reduxStore'
import { actions } from '../../../redux/actions'

type MapStatePropsType = {
  users: UserType[]
  currentPage: number
  pageSize: number
  followingInProgress: number[]
  totalUsersCount: number
  isFetching: boolean
}

type MapDispatchPropsType = {
  requestUsers: (pageSize: number, currentPage: number) => void
  setCurrentPage: (currentPage: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
}

class UsersContainer extends Component<
  MapStatePropsType & MapDispatchPropsType
> {
  componentDidMount() {
    const { requestUsers, pageSize, currentPage } = this.props
    requestUsers(pageSize, currentPage)
  }

  onPageChange = (p: number) => {
    const { requestUsers, pageSize, setCurrentPage } = this.props
    setCurrentPage(p)
    requestUsers(pageSize, p)
  }

  render() {
    const {
      users,
      follow,
      unfollow,
      totalUsersCount,
      pageSize,
      followingInProgress,
      currentPage,
      isFetching,
    } = this.props
    return (
      <>
        {' '}
        {isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          users={users}
          onPageChange={this.onPageChange}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      setCurrentPage: actions.setCurrentPage,
      requestUsers,
    }
  ),
  withAuthRedirect
)(UsersContainer)
