import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let postsData= [
        {id: 1, message: 'It`s my first post', likesCount: 11},
        {id: 2, message: 'Im happy', likesCount: 32},
        {id: 3, message: 'Yo', likesCount: 22},
        {id: 4, message: 'Yo', likesCount: 312},
        {id: 5, message: 'Another Yo', likesCount: 111},
        {id: 6, message: 'Wut???', likesCount: 41},
        {id: 7, message: 'Rigth, one more Yo', likesCount: 71}
        ],
        posts = postsData.map(p => <Post message={p.message} currentLikes={p.likesCount} />);

return (
<div className={styles.wrapper}>
    <div className={styles.header}>My posts</div>
    <div className={styles.place}>
        <textarea placeholder='your news...' className={styles.field}></textarea>
        <button className={styles.btn}>Send</button>
    </div>
    <div className={styles.posts}>
        {posts}
    </div>
</div>
)
}

export default MyPosts;