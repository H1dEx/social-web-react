import React from "react";
import {sendMessageActionCreator} from "../../../redux/messagesReducer.ts";
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
        sendMessage: (newMessageBody) => dispatch(sendMessageActionCreator(newMessageBody)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);