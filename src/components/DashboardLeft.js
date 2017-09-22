import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLeft = (props) => {

  return (
    <div className="dash-left">
        <div className="logo">
            INTRINSIC
        </div>
        <div className="avatar">
            
            <h3>Current User</h3>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <Link to={`/dashboard/home`}>Dashboard</Link>
            <Link to={`/dashboard/projects`}>My Projects</Link>
            <Link to={`/dashboard/profile`}>My Profile</Link>
            <Link to={`/dashboard/messages`}>Messages</Link>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <Link to={`/dashboard/new`}>Create New</Link>
            <Link to={`/dashboard/task`}>Add Task</Link>
            <Link to={`/dashboard/profile`}>My Profile</Link>
            <Link to={`/dashboard/messages`}>Messages</Link>
        </div>
    </div>
  )

}

export default DashboardLeft
