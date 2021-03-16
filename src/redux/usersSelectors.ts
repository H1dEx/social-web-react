import { AppStateType } from './reduxStore'

const getUsersPageData = (state: AppStateType) => state.usersPage

export const getUsers = (state: AppStateType) => getUsersPageData(state).users
export const getPageSize = (state: AppStateType) =>
  getUsersPageData(state).pageSize
export const getTotalUsersCount = (state: AppStateType) =>
  getUsersPageData(state).totalCount
export const getCurrentPage = (state: AppStateType) =>
  getUsersPageData(state).currentPage
export const getIsFetching = (state: AppStateType) =>
  getUsersPageData(state).isFetching
export const getFollowingInProgress = (state: AppStateType) =>
  getUsersPageData(state).followingInProgress
