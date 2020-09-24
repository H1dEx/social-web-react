import {PhotosType, ProfileType} from "../types/types";
import {ResponseType} from "./api";
import {instance} from "./api";

type ResponsePhotosType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>('profile/' + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {status})
            .then(response => {
                return response.data
            });
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append('Image', photo)
        return instance.put<ResponseType<ResponsePhotosType>>('profile/photo', formData, {
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