import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path} className={styles.dialogsItem} activeClassName={styles.active}>
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
