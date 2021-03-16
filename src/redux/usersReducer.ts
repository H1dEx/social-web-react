import { Dispatch } from 'redux'
import { updateObjectInArray } from '../helpers/object-helpers'
import { UserType } from '../types/types'
import { ThunkType } from './reduxStore'
import { usersAPI } from '../api/users-api'
import {
  actions,
  ActionsTypes,
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW,
} from './actions'

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  id: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(actions.toggleIsFollowingProgress(true, id))
  const response = await apiMethod(id)
  dispatch(actions.toggleIsFollowingProgress(false, id))
  if (response.resultCode === 0) await dispatch(actionCreator(id))
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 50,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
}

export type InitialStateType = typeof initialState

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      }
    default:
      return state
  }
}

export default usersReducer

export const requestUsers = (
  pageSize: number,
  currentPage: number
): ThunkType => async (dispatch: any) => {
  dispatch(actions.toggleIsFetching(true))
  const response = await usersAPI.getUsers(pageSize, currentPage)
  dispatch(actions.toggleIsFetching(false))
  dispatch(actions.setUsers(response.items))
  dispatch(actions.setTotalCount(response.totalCount))
}

export const unfollow = (id: number): ThunkType => async (dispatch) =>
  followUnfollowFlow(
    dispatch,
    id,
    usersAPI.unfollow.bind(usersAPI),
    actions.acceptUnfollow
  )

export const follow = (id: number): ThunkType => async (
  dispatch: Dispatch<ActionsTypes>
) =>
  followUnfollowFlow(
    dispatch,
    id,
    usersAPI.follow.bind(usersAPI),
    actions.acceptFollow
  )
