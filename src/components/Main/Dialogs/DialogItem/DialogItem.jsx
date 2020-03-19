import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={styles.dialogsItem} activeClassName={styles.active}>{props.name}</NavLink>
)
}

export default DialogItem