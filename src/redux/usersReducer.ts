import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../helpers/object-helpers";
import {PhotosType, UserType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "usersPage/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "usersPage/TOGGLE_IS_FOLLOWING_PROGRESS";

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, id: number, apiMethod: Function, actionCreator: (userId: number) => acceptFollowActionType | acceptUnfollowActionType) => {
    dispatch(toggleIsFollowingProgress(true, id));
    const response = await apiMethod(id);
    dispatch(toggleIsFollowingProgress(false, id));
    if (response.resultCode === 0) await dispatch(actionCreator(id));
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users ids
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: (action.isFetching) ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id != action.id)
            };
        default:
            return state;
    }
};

type ActionsTypes = acceptFollowActionType | acceptUnfollowActionType
    | setTotalCountActionType | setCurrentPageActionType | setUsersActionType
    | toggleIsFollowingProgressActionType | toggleIsFetchingActionType;

export default usersReducer;

type acceptFollowActionType = {
    type: typeof FOLLOW
    userId: number
}
type acceptUnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type setTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type toggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    id: number
}
export const acceptFollow = (userId: number): acceptFollowActionType => ({type: FOLLOW, userId});
export const acceptUnfollow = (userId: number): acceptUnfollowActionType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UserType>): setUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalCount = (totalCount: number): setTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleIsFollowingProgress = (isFetching: boolean, id: number): toggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
});

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export const requestUsers = (pageSize: number, currentPage: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => await _followUnfollowFlow(dispatch, id, followAPI.unfollow.bind(followAPI), acceptUnfollow)
export const followThunk = (id: number): ThunkType => async (dispatch) => await _followUnfollowFlow(dispatch, id, followAPI.follow.bind(followAPI), acceptFollow)