import React from 'react';
import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.wraper}>
            <div className={styles.avatar}><img src={require('./cat.jpg')} alt="avatar"/></div>
            <div className={styles.info}>
                <div className={styles.name}>Alexander D.</div>

                <ul className={styles.about}>
                    <li>Date of Birth: 2 January</li>
                    <li>City: Kiev</li>
                    <li>Education: MGU'13</li>
                    <li>Website: htps://darowa-tebe.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Info;