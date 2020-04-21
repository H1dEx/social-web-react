import React from "react";
import style from "../../Main/Users/users.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>{pages.map(el => (
        <span className={currentPage === el && style.active} onClick={() => onPageChange(el)}
        >{el}</span>))}</div>
}

export default Paginator;