import {createSelector} from "reselect";

export const getUsers = state => state.usersPage.users;

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(el=> true);
})

export const getPageSize = state => state.usersPage.pageSize;

export const getTotalUsersCount = state => state.usersPage.totalCount;

export const getCurrentPage = state => state.usersPage.currentPage;

export const getIsFetching = state => state.usersPage.isFetching;

export const getFollowingInProgress = state => state.usersPage.followingInProgress;
