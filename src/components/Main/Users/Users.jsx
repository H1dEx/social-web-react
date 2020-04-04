import React, {Component} from "react";
import style from './users.module.css';
import * as axios from 'axios';
import userPng from "./../../../assets/cat.jpg";

class Users extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];

        for (let i = 1; i<=pagesCount; i++) {pages.push(i)}
        return (
            <div className={style.main}>
                <div>{pages.map(el=><span
                    className={this.props.currentPage === el && style.active}
                    onClick={()=>{this.onPageChange(el)}}
                >{el}</span>)}</div>
                <h2 className={style.title}>Users</h2>
                {
                    this.props.users.map(el => <div key={el.id} className={style.user_container}>
                        <div className={style.logo_wrapper}>
                            <img className={style.image} src={(el.photos.small != null) ? el.photos.small : userPng}
                                 alt='logo'/>
                            {(el.followed) ?
                                <button className={style.btn}
                                        onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                                : <button className={style.btn}
                                          onClick={() => this.props.follow(el.id)}>Follow</button>}
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
    }
};


export default Users;