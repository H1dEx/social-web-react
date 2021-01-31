import React from "react";
import style from "./users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
	return (
		<div>
			<Paginator
				currentPage={props.currentPage}
				onPageChange={props.onPageChange}
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
			/>
			<h2 className={style.title}>Users</h2>
			{
				props.users.map(el => <User key={el.id} followingInProgress={props.followingInProgress}
											follow={props.follow} unfollow={props.unfollow} user={el}/>
				)
			}
		</div>
	);
};

export default Users;