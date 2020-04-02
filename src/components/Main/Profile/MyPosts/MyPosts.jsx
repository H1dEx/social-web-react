import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.profilePage.postsData.map(p => <Post message={p.message} currentLikes={p.likesCount} />),
        address = React.createRef(),        
        textChange = () => {
            props.updateNewPostText(address.current.value)
        },
        addPost = () => {
            props.addPost(address.current.value);
        };
return (
<div className={styles.wrapper}>
    <div className={styles.header}>My posts</div>
    <div className={styles.place}>
        <textarea placeholder='your news...' className={styles.field} ref={address}  value={props.profilePage.postValue} onChange={textChange} />
        <button className={styles.btn} onClick={addPost} >Send</button>
    </div>
    <div className={styles.posts}>
        {posts}
    </div>
</div>
)
}

export default MyPosts;