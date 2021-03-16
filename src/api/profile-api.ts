import { ProfileType } from '../types/types'
import { instance, ResultCodeEnum } from './api'

type SaveProfileResponseType = {
  resultCode: ResultCodeEnum
  messages: string[]
  data: ProfileType
}
export const profileAPI = {
  async getProfile(userId: number) {
    const response = await instance.get<ProfileType>(`profile/${userId}`)
    return response.data
  },

  async getStatus(userId: number) {
    const response = await instance.get<string>(`profile/status/${userId}`)
    return response.data
  },

  async updateStatus(status: string) {
    const response = await instance.put('profile/status', { status })
    return response.data
  },

  async savePhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)
    const response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  },

  async saveProfile(profile: ProfileType) {
    const response = await instance.put<SaveProfileResponseType>(
      'profile',
      profile
    )
    return response.data
  },
}
