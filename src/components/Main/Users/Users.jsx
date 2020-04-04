import React from "react";
import style from "./users.module.css";
import userPng from "../../../assets/cat.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];

    for (let i = 1; i<=pagesCount; i++) {pages.push(i)}
    return (
        <div className={style.main}>
            <div>{pages.map(el=><span
                className={props.currentPage === el && style.active}
                onClick={()=>{props.onPageChange(el)}}
            >{el}</span>)}</div>
            <h2 className={style.title}>Users</h2>
            {
                props.users.map(el => <div key={el.id} className={style.user_container}>
                    <div className={style.logo_wrapper}>
                        <img className={style.image} src={(el.photos.small != null) ? el.photos.small : userPng}
                             alt='logo'/>
                        {(el.followed) ?
                            <button className={style.btn}
                                    onClick={() => props.unfollow(el.id)}>Unfollow</button>
                            : <button className={style.btn}
                                      onClick={() => props.follow(el.id)}>Follow</button>}
                    </div>
                    <div className={style.user_wrapper}>
                        <div className={style.user_info}>
                            <div className={style.user_name}>{el.name}</div>
                            <div className={style.user_address}>
                                <div className={"style.user_country"}>{"el.location.country"},</div>
                                <div>{"el.location.city"}</div>
                            </div>
                        </div>
                        <div className={style.user_about}>{el.status}</div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;