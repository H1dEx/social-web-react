import {profileAPI} from "../api/api";

const ADD_POST = "profilePage/ADD_POST";
const SET_PROFILE = 'profilePage/SET_PROFILE';
const SET_STATUS = 'profilePage/SET_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const CLEAR_PROFILE = 'profilePage/CLEAR_PROFILE_STATE'

let initialState = {
    profile: null,
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
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
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
            return {...state, profile: {...state.profile, photos: action.photos}}
        case CLEAR_PROFILE:
            return {...state, profile: null, status: ''}
        default:
            return state;
        
    }
};

export default profileReducer;

export const addPost = NewPostText => ({
    type: ADD_POST,
    NewPostText
});

export const setProfile = profile => ({
    type: SET_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const deletePost = id => ({
    type: DELETE_POST,
    id
})

export const savePhotoSuccess = photos => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0)
        dispatch(setStatus(status));
};

export const clearProfile = () => ({type: CLEAR_PROFILE});

export const savePhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.photos))
}