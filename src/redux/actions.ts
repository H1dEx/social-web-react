import { InferActionsTypes } from './reduxStore'
import { PhotosType, ProfileType, UserType } from '../types/types'

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
export const SEND_MESSAGE = 'SEND-MESSAGE'
export const ADD_POST = 'profilePage/ADD_POST'
export const SET_PROFILE = 'profilePage/SET_PROFILE'
export const SET_STATUS = 'profilePage/SET_STATUS'
export const DELETE_POST = 'profilePage/DELETE_POST'
export const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS'

export const FOLLOW = 'usersPage/FOLLOW'
export const UNFOLLOW = 'usersPage/UNFOLLOW'
export const SET_USERS = 'usersPage/SET_USERS'
export const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE'
export const SET_TOTAL_COUNT = 'usersPage/SET_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS =
  'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS'

export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED_SUCCESS } as const),
  setUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      data: {
        id,
        email,
        login,
        isAuth,
      },
    } as const),

  sendMessageActionCreator: (newMessageBody: string) =>
    ({
      type: SEND_MESSAGE,
      newMessageBody,
    } as const),

  addPost: (NewPostText: string) =>
    ({
      type: ADD_POST,
      NewPostText,
    } as const),
  setProfile: (profile: ProfileType) =>
    ({
      type: SET_PROFILE,
      profile,
    } as const),
  setStatus: (status: string) =>
    ({
      type: SET_STATUS,
      status,
    } as const),
  deletePost: (id: number) =>
    ({
      type: DELETE_POST,
      id,
    } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: SAVE_PHOTO_SUCCESS,
      photos,
    } as const),

  acceptFollow: (userId: number) => ({ type: FOLLOW, userId } as const),
  acceptUnfollow: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const),
  setTotalCount: (totalCount: number) =>
    ({ type: SET_TOTAL_COUNT, totalCount } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
  toggleIsFollowingProgress: (isFetching: boolean, id: number) =>
    ({
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      id,
    } as const),
}

export type ActionsTypes = InferActionsTypes<typeof actions>
