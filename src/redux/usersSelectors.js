const getUsersPageData = state => state.usersPage

export const getUsers = state => getUsersPageData(state).users
export const getPageSize = state => getUsersPageData(state).pageSize
export const getTotalUsersCount = state => getUsersPageData(state).totalCount
export const getCurrentPage = state => getUsersPageData(state).currentPage
export const getIsFetching = state => getUsersPageData(state).isFetching
export const getFollowingInProgress = state => getUsersPageData(state).followingInProgress