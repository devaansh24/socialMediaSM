import React from 'react'
import "./Profile.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import PostSide from "../../components/PostSide/PostSide"
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/Rightside/RightSide'
const Profile = () => {
  return (
      <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PostSide/>
      </div>
      <RightSide />
    </div>
  )
}

export default Profile;