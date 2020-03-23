import React from "react";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = props => {
    return (<StoreContext.Consumer>
        {(store) => {
        let state = store.getState(),
            sendMessage = (value) => store.dispatch(sendMessageActionCreator(value)),
            changeMessage = (value) => store.dispatch(messageChangeActionCreator(value));

        return <Dialogs sendMessage={sendMessage} changeMessage={changeMessage} messagesPage={state.messagesPage}/>

    }}</StoreContext.Consumer>)
};

export default DialogsContainer;
