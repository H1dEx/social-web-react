import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Textarea } from '../../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../../helpers/validators/validators';

const Dialogs = (props) => {
  const dialogsElements = props.messagesPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.messagesPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  const addNewMessage = (data) => {
    props.sendMessage(data.newMessageBody);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Dialogs</div>
      <div className={styles.contentWrapper}>
        <div className={styles.dialogsList}>{dialogsElements}</div>
        <div className={styles.messagesList}>
          {messagesElements}
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      component={Textarea}
      name="newMessageBody"
      placeholder="Enter your message"
      validate={[required, maxLength]}
      className={styles.textField}
    />
    <button className={styles.btn}> Send</button>
  </form>
);

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
