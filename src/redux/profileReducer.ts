import { PostType, ProfileType } from '../types/types'
import { ThunkType } from './reduxStore'
import { profileAPI } from '../api/profile-api'
import {
  actions,
  ActionsTypes,
  ADD_POST,
  DELETE_POST,
  SAVE_PHOTO_SUCCESS,
  SET_PROFILE,
  SET_STATUS,
} from './actions'

const initialState = {
  profile: null as ProfileType | null,
  postsData: [
    {
      id: 1,
      message: 'It`s my first post',
      likesCount: 11,
    },
    {
      id: 2,
      message: 'Im happy',
      likesCount: 32,
    },
    {
      id: 3,
      message: 'Yo',
      likesCount: 22,
    },
    {
      id: 4,
      message: 'Yo',
      likesCount: 312,
    },
    {
      id: 5,
      message: 'Another Yo',
      likesCount: 111,
    },
    {
      id: 6,
      message: 'Wut???',
      likesCount: 41,
    },
    {
      id: 7,
      message: 'Right, one more Yo',
      likesCount: 71,
    },
  ] as Array<PostType>,
  status: '',
  newPostText: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 8,
        message: action.NewPostText,
        likesCount: 0,
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      }
    }
    case SET_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((item) => item.id !== action.id),
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }
    default:
      return state
  }
}

export default profileReducer

export const getProfile = (userId: number): ThunkType => async (
  dispatch: any
) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(actions.setProfile(response))
}

export const getStatus = (userId: number): ThunkType => async (
  dispatch: any
) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response))
}

export const updateStatus = (status: string): ThunkType => async (
  dispatch: any
) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (photo: any): ThunkType => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(photo)

  if (response.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch
) => {
  const response = await profileAPI.saveProfile(profile)
  if (response.resultCode === 0) {
    dispatch(actions.setProfile(response.data))
  }
}
