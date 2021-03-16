import React from 'react'
import style from './users.module.css'
import Paginator from '../../common/Paginator/Paginator'
import User from './User'
import { UserType } from '../../../types/types'

type PropsType = {
  currentPage: number
  onPageChange: (pageNum: number) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: number[]
  follow: (id: number) => void
  unfollow: (id: number) => void
}

const Users: React.FC<PropsType> = ({
  currentPage,
  follow,
  followingInProgress,
  onPageChange,
  pageSize,
  totalUsersCount,
  unfollow,
  users,
}) => (
  <div>
    <Paginator
      currentPage={currentPage}
      onPageChange={onPageChange}
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
    />
    <h2 className={style.title}>Users</h2>
    {users.map((el) => (
      <User
        key={el.id}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
        user={el}
      />
    ))}
  </div>
)

export default Users
