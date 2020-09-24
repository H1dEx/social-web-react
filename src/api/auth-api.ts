import {instance} from "./api";
import {ResponseType} from "./api";


export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseType>>('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseType>>('auth/login', {
            email, password, rememberMe, captcha
        }).then(response => response.data)

    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
};

type MeResponseType = { id: number, email: string, login: string }
type LoginResponseType = { userId: number }