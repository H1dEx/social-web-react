import { instance, ResponseType } from './api'

type MeDataType = { id: number; email: string; login: string }
type LoginDataType = { userId: number }

export const authAPI = {
  async me() {
    const response = await instance.get<ResponseType<MeDataType>>('auth/me')
    return response.data
  },

  async login(email: string, password: string, rememberMe = false) {
    const response = await instance.post<ResponseType<LoginDataType>>(
      'auth/login',
      {
        email,
        password,
        rememberMe,
      }
    )
    return response.data
  },

  async logout() {
    const response = await instance.delete('auth/login')
    return response.data
  },
}
