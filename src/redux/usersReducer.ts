import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../helpers/object-helpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "usersPage/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "usersPage/TOGGLE_IS_FOLLOWING_PROGRESS";

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, id: number, apiMethod: Function, actionCreator: (userId: number) => any) => {
    dispatch(actions.toggleIsFollowingProgress(true, id));
    const response = await apiMethod(id);
    dispatch(actions.toggleIsFollowingProgress(false, id));
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    acceptFollow: (userId: number) => ({type: FOLLOW, userId} as const),
    acceptUnfollow: (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const),
    setTotalCount: (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const),
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        id
    } as const)
}

export default usersReducer;


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export const requestUsers = (pageSize: number, currentPage: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const response = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalCount(response.totalCount));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => await _followUnfollowFlow(dispatch, id, followAPI.unfollow.bind(followAPI), actions.acceptUnfollow)
export const followThunk = (id: number): ThunkType => async (dispatch) => await _followUnfollowFlow(dispatch, id, followAPI.follow.bind(followAPI), actions.acceptFollow)