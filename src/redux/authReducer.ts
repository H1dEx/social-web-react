import {authAPI, secureAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

// export type initialStateType = {
//     id: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
//     captchaURL: string | null
// }

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaURL: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: setAuthUserDataActionPayloadType
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});

type getCaptchaURLSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaURL: string
}

export const setCaptchaURLSuccess = (captchaURL: string): getCaptchaURLSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaURL
});

export const authorize = () => async (dispatch: any) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = ({email, password, rememberMe, captcha}: { email: string, password: string, rememberMe: boolean, captcha: string }) => async (dispatch: any) => {
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

export const getCaptchaURL = () => async (dispatch: any) => {
    const response = await secureAPI.getCaptchaURL();
    const captchaURL = response.url;
    dispatch(setCaptchaURLSuccess(captchaURL))
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(dispatch(setUserData(null, null, null, false)))
    }
}