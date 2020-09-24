import axios from 'axios';
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7de158bf-36a5-4de3-8c71-0f4cdddc6819'
    }
});

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}> = {
    data: D
    messages: Array<string>
    resultCode: number
}

export type FollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}