import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
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
    ],
    status: ''
};

it('new post should be added ', () => {
    //1.Test data
    let action = addPost('My first test LMAO!');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsData.length).toBe(4);
});
it('new post should be My first test LMAO! ', () => {
    //1.Test data
    let action = addPost('My first test LMAO!');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.postsData[3].message).toBe('My first test LMAO!')
});

it('after deleting length of array should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(state.postsData.length - 1)
})

it('after getting wrong id length of array shouldn`t be decrement', () => {
    let action = deletePost('pepega');
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(state.postsData.length)
})