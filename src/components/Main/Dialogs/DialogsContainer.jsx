import React from "react";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
    let state = props.store.getState(),
        sendMessage = (value) => props.store.dispatch(sendMessageActionCreator(value)),
        changeMessage = (value) => props.store.dispatch(messageChangeActionCreator(value));

    return <Dialogs sendMessage={sendMessage} changeMessage={changeMessage} messagesPage={state.messagesPage} />
};

export default DialogsContainer;
