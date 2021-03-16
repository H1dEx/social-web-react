import axios from 'axios'
import { UserType } from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7de158bf-36a5-4de3-8c71-0f4cdddc6819',
  },
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
export type ResponseType<D = {}, R = ResultCodeEnum> = {
  data: D
  messages: string[]
  resultCode: R
}
