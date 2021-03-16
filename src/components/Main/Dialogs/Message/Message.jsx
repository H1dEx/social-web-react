import React from 'react';
import styles from './Message.module.css';

const Message = (props) => <div className={styles.messagesItem}>{props.message}</div>;

export default Message;
