import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
let path = "/dialogs/" + props.id;
return (
<NavLink to={path} className={styles.dialogsItem} activeClassName={styles.active}>{props.name}</NavLink>
)
}

const Message = (props) => {
return (
<div className={styles.messagesItem}>{props.message}</div>
)
}

const Dialogs = () => {

let dialogsData = [
{id: 1, name: 'Alex'},
{id: 2, name: 'Petr'},
{id: 3, name: 'Hennadi'},
{id: 4, name: 'Lena'},
{id: 5, name: 'Katya'},
{id: 6, name: 'Gosha'},
{id: 7, name: 'Polina'}
],
dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />),
messagesData  = [
    {id: 1, message: 'Hello man'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Nigga'},
    {id: 6, message: 'Wut???'},
    {id: 7, message: 'Im sorry bro'}
    ],
messagesElements = messagesData.map( m => <Message message={m.message} />);

return (
<div className={styles.wrapper}>
    <div className={styles.header}>Dialogs</div>
    <div className={styles.contentWrapper}>
        <div className={styles.dialogsList}>
            {dialogsElements}
            
        </div>

        <div className={styles.messagesList}>
            {messagesElements}
        </div>
    </div>
</div>
)
}

export default Dialogs