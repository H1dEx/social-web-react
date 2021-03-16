import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../../helpers/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';

const MyPosts = React.memo((props) => {
  const posts = props.profilePage.postsData.map((p) => (
    <Post message={p.message} currentLikes={p.likesCount} />
  ));
  const addPost = (data) => {
    props.addPost(data.newPostContent);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>My posts</div>
      <div className={styles.place}>
        <AddNewPostFormRedux onSubmit={addPost} />
      </div>
      <div className={styles.posts}>{posts}</div>
    </div>
  );
});

const maxLength200 = maxLengthCreator(200);

const AddNewPostForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      component={Textarea}
      placeholder="your news..."
      className={styles.field}
      name="newPostContent"
      validate={[required, maxLength200]}
    />
    <button className={styles.btn}>Send</button>
  </form>
);

const AddNewPostFormRedux = reduxForm({
  form: 'postAddForm',
})(AddNewPostForm);

export default MyPosts;
