import axios from 'axios';
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7de158bf-36a5-4de3-8c71-0f4cdddc6819'
    }
});

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,
            {withCredentials: true})
            .then(response => response.data);
    }
};

export const followAPI = {
    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
};

type MeResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: null
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>('auth/login', {
            email, password, rememberMe, captcha
        }).then(response => response.data)

    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
};

export const secureAPI = {
    getCaptchaURL() {
        return instance.get('/security/get-captcha-url').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
            .then(response => {
                return response.data
            });
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append('Image', photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            return result.data
        })
    },
    async saveProfile(profile: ProfileType) {
        const response = await instance.put('/profile', profile);
        return response.data
    }
};

