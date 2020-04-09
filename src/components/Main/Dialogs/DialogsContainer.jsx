import React from "react";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AuthRedirect} from "../../../hoc/AuthRedirect";


let AuthRedirectComponent = AuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value) => dispatch(sendMessageActionCreator(value)),
        changeMessage: (value) => dispatch(messageChangeActionCreator(value))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;
