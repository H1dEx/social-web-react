import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
return (
<div className={styles.wrapper}>
    <div className={styles.header}>My posts</div>
    <div className={styles.place}>
        <textarea placeholder='your news...' className={styles.field}></textarea>
        <button className={styles.btn}>Send</button>
    </div>
    <div className={styles.posts}>
        <Post message="Hi, my name is.." currentLikes="200"/>
        <Post message="This is my first post" currentLikes="3"/>
        <Post message="OR nOt" currentLikes="11"/>
    </div>
</div>
)
}

export default MyPosts;