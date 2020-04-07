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
}