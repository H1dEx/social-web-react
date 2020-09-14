import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
};

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(el=> true);
})

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalCount;

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;

export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;

export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress;
