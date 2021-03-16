import { GetItemsType, instance } from './api'

export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await instance.get<GetItemsType>(
      `users?count=${pageSize}&page=${currentPage}`,
      { withCredentials: true }
    )
    return response.data
  },
  async follow(id: number) {
    const response = await instance.post<ResponseType>(`follow/${id}`, {})
    return response.data
  },

  async unfollow(id: number) {
    const response = await instance.delete<ResponseType>(`follow/${id}`)
    return response.data
  },
}
