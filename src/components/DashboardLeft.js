import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLeft = (props) => {

  return (
    <div className="dash-left">
        <div className="logo">
            INTRINSIC
        </div>
        <div className="avatar">
            <div className="profile-image"></div>
            <h3>{props.currentUser["first_name"]} {props.currentUser["last_name"]}</h3>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <ul>
              <li><Link to={`/dashboard/home`}>Dashboard</Link></li>
              <li><Link to={`/dashboard/projects`}>My Projects</Link></li>
              <li><Link to={`/dashboard/profile`}>My Profile</Link></li>
              <li><Link to={`/dashboard/messages`}>Messages</Link></li>
            </ul>

        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <ul>
              <li><Link to={`/dashboard/new`}>Create New</Link></li>
              <li><Link to={`/dashboard/task`}>Add Task</Link></li>
              <li><Link to={`/dashboard/profile`}>My Profile</Link></li>
              <li><Link to={`/dashboard/messages`}>Messages</Link></li>
            </ul>
        </div>
    </div>
  )

}

export default DashboardLeft
