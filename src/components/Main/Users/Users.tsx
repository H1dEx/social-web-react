import React from "react";
import style from "./users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    portionSize?: number
    followingInProgress: Array<number>
    follow: Function
    unfollow: Function
    users: Array<UserType>
}

let Users: React.FC<PropsType> = ({
                                      totalUsersCount,
                                      currentPage,
                                      pageSize,
                                      follow,
                                      followingInProgress,
                                      onPageChange,
                                      unfollow,
                                      users
                                  }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <h2 className={style.title}>Users</h2>
            {
                users.map(el => <User key={el.id} followingInProgress={followingInProgress}
                                      follow={follow} unfollow={unfollow} user={el}/>
                )
            }
        </div>
    );
};

export default Users;