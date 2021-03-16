import React from 'react'
import About from './About/About'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../../types/types'
import Preloader from '../../common/Preloader/Preloader'

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (photo: any) => void
}

const Profile = (props: PropsType) => {
  if (!props.profile) return <Preloader />
  return (
    <section>
      <About
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </section>
  )
}

export default Profile
