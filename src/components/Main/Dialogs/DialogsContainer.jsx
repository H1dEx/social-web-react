import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../../hoc/AuthRedirect'
import { actions } from '../../../redux/actions'

const mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (newMessageBody) =>
    dispatch(actions.sendMessageActionCreator(newMessageBody)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
