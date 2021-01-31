import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../helpers/object-helpers";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "usersPage/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "usersPage/TOGGLE_IS_FOLLOWING_PROGRESS";

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleIsFollowingProgress(true, id));
	const response = await apiMethod(id);
	dispatch(toggleIsFollowingProgress(false, id));
	if (response.resultCode === 0) await dispatch(actionCreator(id));
}

let initialState = {
	users: [],
	pageSize: 50,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
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

export default usersReducer;
export const acceptFollow = (userId) => ({type: FOLLOW, userId});
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const response = await usersAPI.getUsers(pageSize, currentPage);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalCount(response.totalCount));
};

export const unfollow = (id) => async (dispatch) => await followUnfollowFlow(dispatch, id, followAPI.unfollow.bind(followAPI), acceptUnfollow)

export const follow = (id) => async (dispatch) => await followUnfollowFlow(dispatch, id, followAPI.follow.bind(followAPI), acceptFollow);
