const ADD_POST = "ADD-POST";
const UPDATE_POST_VALUE = "UPDATE-POST-VALUE";

let initialState = {postsData: [
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
    postValue: "" };

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_POST_VALUE:
            state.postValue = action.postValue;
            break;
        case ADD_POST:
            let newPost = {
                id: 8,
                message: action.postContent,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.postValue = '';
            break;
        default:
            return state;

    }
    return state;
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