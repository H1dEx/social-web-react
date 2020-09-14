import profileReducer, {addPost, deletePost} from "./profileReducer.ts";

let initialState = {
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
}
it('length should be incremented', () => {
    let action = addPost('something new content');

    let newState = profileReducer(initialState, action);
    expect(newState.postsData.length).toBe(8);
})

it('length should be decremented', () => {
    let action = deletePost(initialState.postsData[initialState.postsData.length - 1].id);

    let newState = profileReducer(initialState, action);
    expect(newState.postsData.length).toBe(6);
})

it('message should be "something new content"', () => {
    let action = addPost('something new content');

    let newState = profileReducer(initialState, action);
    expect(newState.postsData[7].message).toBe('something new content');
})