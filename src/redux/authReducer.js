import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }

};

export default authReducer;

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login}});

export const authorize = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
}

export const login = ({email, password, rememberMe}) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authorize())
            }
        })
}

export const logout = () => dispatch => {
    authAPI.delete()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(dispatch(setUserData(null, null, null, false)))
            }
        })
}