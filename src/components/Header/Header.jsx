import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header_content}>
                    <div className={styles.logo}>
                        <div className={styles.logo_image}><img src={require('./react.png')} alt="logo"
                                                                className={styles.img}/>
                        </div>
                        <div className={styles.logo_descr}>My social net</div>
                    </div>
                    <div >
                       {
                           (props.isAuth)
                        ? <NavLink to="/profile" className={styles.login_block}>{props.login}</NavLink>
                        : <NavLink to="/login" className={styles.signin_block}>Log in</NavLink>
                       }

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;