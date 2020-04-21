import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

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
            };
        default:
            return state;
    }

};

export default authReducer;

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const authorize = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = ({email, password, rememberMe}) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(authorize())
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async dispatch => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(dispatch(setUserData(null, null, null, false)))
    }
}