import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
        <div className='container'>
            <div className={styles.logo}>
                <div className={styles.logo_image}><img src={require('./react.png')} alt="logo" className={styles.img}/></div>
                <div className={styles.logo_descr}>My social net</div>
            </div>
        </div>
    </header>   
}

export default Header