import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.image}>
                    <img src={require('../../About/ProfileInfo/cat.jpg')} alt="ce_content"/>
                </div>
                <div className={styles.content}>{props.message}</div>
            </div>
            <div className={styles.likes}>
                <button className={styles.btn}>Like</button>
                <span className={styles.currentLikes}>{props.currentLikes}</span></div>
        </div>
    )
}

export default Post;