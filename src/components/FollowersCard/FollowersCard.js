import React from 'react'
import "./FollowersCard.css"

import {Followers} from "../Data/FollowersData"
const FollowersCards = () => {
  return (
    <div className="FollowerCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className='followerImg' />
              <div className="name">
                <span>{follower.name}</span>
                <spam>{follower.username}</spam>
              </div>
            </div>  
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCards