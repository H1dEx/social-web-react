import {authAPI, secureAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state;
    }
};

export default authReducer;

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const setCaptchaURLSuccess = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaURL});

export const authorize = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = ({email, password, rememberMe, captcha}) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(authorize())
    } else {
        if (response.resultCode === 10)
            dispatch(getCaptchaURL());
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaURL = () => async dispatch => {
    const response = await secureAPI.getCaptchaURL();
    const captchaURL = response.url;
    dispatch(setCaptchaURLSuccess(captchaURL))
}

export const logout = () => async dispatch => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(dispatch(setUserData(null, null, null, false)))
    }
}