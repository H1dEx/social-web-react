import React from "react";
import style from "./users.module.css";
import userPng from "../../../assets/cat.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={style.user_container}>
            <div className={style.logo_wrapper}>
                <NavLink to={'/profile/' + user.id}> <img className={style.image}
                                                          src={(user.photos.small != null) ? user.photos.small : userPng}
                                                          alt='logo'/></NavLink>
                {(user.followed) ?
                    <button className={style.btn} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unfollow(user.id)}>Unfollow</button>
                    :
                    <button className={style.btn} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}>Follow</button>}
            </div>

            <div className={style.user_wrapper}>
                <div className={style.user_info}>
                    <div className={style.user_name}>{user.name}</div>
                    <div className={style.user_address}>
                        <div className={"style.user_country"}>{"user.location.country"},</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
                <div className={style.user_about}>{user.status}</div>
            </div>
        </div>)
};

export default User;