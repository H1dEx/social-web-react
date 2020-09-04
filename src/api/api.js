import * as axios from 'axios';

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
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },
    
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {
            email, password, rememberMe
        }).then(response => response.data)
        
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
            .then(response => {
                return response.data
            });
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('Image', photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            return result.data
        })
    }
};
