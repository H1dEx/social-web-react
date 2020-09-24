import {GetItemsType, instance} from "./api";

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get<GetItemsType>(`users?count=${pageSize}&page=${currentPage}`,
            {withCredentials: true})
            .then(response => response.data);
    }
};

export const followAPI = {
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`, {})
            .then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then(response => response.data);
    }
};