import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post message={p.message} currentLikes={p.likesCount} />),
    
    addPost = () => {
        props.addPost(address.current.value);
    },
    address = React.createRef();

return (
<div className={styles.wrapper}>
    <div className={styles.header}>My posts</div>
    <div className={styles.place}>
        <textarea placeholder='your news...' className={styles.field} ref={address}></textarea>
        <button className={styles.btn} onClick={addPost} >Send</button>
    </div>
    <div className={styles.posts}>
        {posts}
    </div>
</div>
)
}

export default MyPosts;