import React from "react";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value) => dispatch(sendMessageActionCreator(value)),
        changeMessage: (value) => dispatch(messageChangeActionCreator(value))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
