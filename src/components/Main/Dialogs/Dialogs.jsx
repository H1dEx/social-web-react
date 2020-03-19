import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />),
        messagesElements = props.messagesPage.messagesData.map( m => <Message message={m.message} />),
        newMessage = React.createRef(),
        sendMessage = () => {
            return sendMessage.current.value;
        }

    return (
    <div className={styles.wrapper}>
        <div className={styles.header}>Dialogs</div>
        <div className={styles.contentWrapper}>
            <div className={styles.dialogsList}>
                {dialogsElements}
            </div>
            <div className={styles.messagesList}>
                {messagesElements}
        <textarea name="messageArea" placeholder="Type your message" className={styles.textField} ref={newMessage} ></textarea>
        <button className={styles.btn} onClick={sendMessage}>Send</button>
            </div>

        </div>
    </div>
)
}

export default Dialogs