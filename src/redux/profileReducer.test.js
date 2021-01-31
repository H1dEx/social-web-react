import profileReducer, {addPost, deletePost} from "./profileReducer";

let initState = {
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
		}
	]
};

it('after adding length of posts should be incremented', () => {
	let action = addPost('new post value');
	let newState = profileReducer(initState, action)
	
	expect(newState.postsData.length).toBe(4)
})

it('after deleting length of posts should be decremented', () => {
	let action = deletePost(3);
	let newState = profileReducer(initState, action)
	expect(newState.postsData.length).toBe(2)
})