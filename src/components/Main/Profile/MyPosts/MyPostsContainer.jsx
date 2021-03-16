import React from 'react'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { actions } from '../../../../redux/actions'

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
})

const MyPostsContainer = connect(mapStateToProps, { addPost: actions.addPost })(
  MyPosts
)

export default MyPostsContainer
