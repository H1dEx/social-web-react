import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_VALUE = "UPDATE-POST-VALUE";
const SET_PROFILE = 'SET_PROFILE';

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
    postValue: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_VALUE:

            return {...state, postValue: action.postValue};
        case ADD_POST:
            let newPost = {
                id: 8,
                message: action.postContent,
                likesCount: 0
            };
            return {...state, postsData: [...state.postsData, newPost], postValue: ''};
        case SET_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;

    }
};

export default profileReducer;

export const addPostActionCreator = content => ({
    type: ADD_POST,
    postContent: content
});
export const updatePostValueActionCreator = value => ({
    type: UPDATE_POST_VALUE,
    postValue: value
});

export const setProfile = profile => ({
    type: SET_PROFILE,
    profile
});

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => dispatch(setProfile(data)))
}