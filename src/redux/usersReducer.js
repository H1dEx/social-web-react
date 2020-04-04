const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: false} : u)
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
            case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        default:
            return state;
    }

};

export default usersReducer;

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage)=>({type:SET_CURRENT_PAGE, currentPage});
export const setTotalCountActionCreator = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});