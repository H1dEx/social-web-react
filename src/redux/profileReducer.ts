import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "profilePage/ADD_POST";
const SET_PROFILE = 'profilePage/SET_PROFILE';
const SET_STATUS = 'profilePage/SET_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const CLEAR_PROFILE = 'profilePage/CLEAR_PROFILE_STATE'

let initialState = {
    profile: null as ProfileType | null,
    postsData: [
        {
            id: 1,
            message: "It`s my first post",
            likesCount: 11
        },
        {
            id: 2,
            message: "Im happy",
            likesCount: 32
        },
        {
            id: 3,
            message: "Yo",
            likesCount: 22
        },
        {
            id: 4,
            message: "Yo",
            likesCount: 312
        },
        {
            id: 5,
            message: "Another Yo",
            likesCount: 111
        },
        {
            id: 6,
            message: "Wut???",
            likesCount: 41
        },
        {
            id: 7,
            message: "Rigth, one more Yo",
            likesCount: 71
        }
    ] as Array<PostType>,
    status: '',
    postValue: ''
};

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                message: action.NewPostText,
                likesCount: 0
            };
            return {...state, postsData: [...state.postsData, newPost], postValue: ''};
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(item => (item.id !== action.id))}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case CLEAR_PROFILE:
            return {...state, profile: null, status: ''}
        default:
            return state;

    }
};

export default profileReducer;

type addPostActionType = {
    type: typeof ADD_POST
    NewPostText: string
}
export const addPost = (NewPostText: string): addPostActionType => ({
    type: ADD_POST,
    NewPostText
});

type setProfileActionType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): setProfileActionType => ({
    type: SET_PROFILE,
    profile
});

type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusActionType => ({
    type: SET_STATUS,
    status
});

type deletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id: number): deletePostActionType => ({
    type: DELETE_POST,
    id
})

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0)
        dispatch(setStatus(status));
};

export const clearProfile = () => ({type: CLEAR_PROFILE});

export const savePhoto = (photo: PhotosType) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.photos))
}

export const saveProfile = (data: ProfileType) => async (dispatch: any, getState: any) => {
    const id = getState().auth.id;
    const response = await profileAPI.saveProfile(data);
    if (response.resultCode === 0) {
        dispatch(getProfile(id));
    } else {
        let message = (response.messages.length > 0) ? response.messages[0] : "Some error";
        dispatch(stopSubmit("profile-info", {_error: message}));
        return Promise.reject(message);
    }
}