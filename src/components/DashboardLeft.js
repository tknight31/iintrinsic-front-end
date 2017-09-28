import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLeft = (props) => {

    const imgStyle = props.userImage ? {backgroundImage: 'url(' + props.userImage + ')'} : null

  return (
    <div className="dash-left">
        <div className="logo">
            INTRINSIC
        </div>
        <div className="avatar">
            <div className="profile-image" style={imgStyle}></div>
            <h3>{props.currentUser["first_name"]} {props.currentUser["last_name"]}</h3>
            <h4>{props.currentUser.role}</h4>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <ul>
              <li><Link to={`/dashboard/home`}>Dashboard</Link></li>
              <li><Link to={`/dashboard/projects/all`}>My Projects</Link></li>
              <li><Link to={`/dashboard/profile/${props.currentUser.id}`}>My Profile</Link></li>
              <li><Link to={`/dashboard/user/edit`}>Edit Profile</Link></li>
              <li><Link to={`/dashboard/messages`}>Messages</Link></li>
            </ul>

        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <ul>
              <li><Link to={`/dashboard/projects/new`}>Create New</Link></li>
              <li><Link to={`/dashboard/requests`}>Project Requests</Link></li>
              <li><Link to={`/dashboard/task`}>Add Task</Link></li>
              <li><Link to={`/dashboard/profile`}>My Profile</Link></li>
              <li><Link to={`/dashboard/messages`}>Messages</Link></li>
            </ul>
        </div>
    </div>
  )

}

export default DashboardLeft
