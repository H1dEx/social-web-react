const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState = {
    users: [
        {id:1, followed:false, fullName: 'Fedor Pedor', status:'Imma boss', location: {city:'Kazan', country:'USA'}},
        {id:2, followed:false, fullName: 'Leha Chel', status:'Ya vip ti vlip', location: {city:'Muromsk', country:'Great Biba'}},
        {id:3, followed:true, fullName: 'Kirill Mandarin', status:'Coin flip', location: {city:'Penza', country:'Africa'}},
        {id:4, followed:true, fullName: 'Ivan Kurgan', status:'Yoyoyoy', location: {city:'Kiev', country:'Ukraine'}},
        {id:5, followed:true, fullName: 'Liza Pizza', status:'Keep it real', location: {city:'New London', country:'China'}},
        {id:6, followed:false, fullName: 'Pulya Dura', status:'Anybody got skills right here?', location: {city:'Pekin', country:'Germany'}},
    ]
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
            return ({
                ...state, users: [...state.users, ...action.users]
            })
        default: return state;
    }

};

export default usersReducer;

export const followActionCreator = (userId)=>({type:FOLLOW, userId});
export const unfollowActionCreator = (userId)=>({type:UNFOLLOW, userId});
export const setUsersActionCreator = (users)=>({type:SET_USERS, users});