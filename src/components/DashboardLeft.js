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
            <Link to={`/dashboard/profile/${props.currentUser.id}`}><div className="profile-image" style={imgStyle}></div></Link>
            <Link to={`/dashboard/profile/${props.currentUser.id}`}><h3>{props.currentUser["first_name"]} {props.currentUser["last_name"]}</h3></Link>
            <h4>{props.currentUser.role}</h4>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <div className="left-nav-links">
              <Link to={`/dashboard/home`}><div className="link-bg"></div><i className="fa fa-fw fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></Link>
              <Link to={`/dashboard/projects/all`}><div className="link-bg"></div><i className="fa fa-fw fa-line-chart" aria-hidden="true"></i><span>My Projects</span></Link>
              <Link to={`/dashboard/profile/${props.currentUser.id}`}><div className="link-bg"></div><i className="fa fa-fw fa-user" aria-hidden="true"></i><span>My Profile</span></Link>
              <Link to={`/dashboard/user/edit`}><div className="link-bg"></div><i className="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i><span>Edit Profile</span></Link>
              <Link to={`/dashboard/messages`}><div className="link-bg"></div><i className="fa fa-fw fa-comments-o" aria-hidden="true"></i><span>Messages</span></Link>
            </div>

        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <div className="left-nav-links">
              <Link to={`/dashboard/projects/new`}><div className="link-bg"></div><i className="fa fa-fw fa-plus-square" aria-hidden="true"></i><span>Create New</span></Link>
              <Link to={`/dashboard/requests`}><div className="link-bg"></div><i className="fa fa-fw fa-user-plus" aria-hidden="true"></i><span>Project Requests</span></Link>
              <Link to={`/dashboard/task`}><div className="link-bg"></div><i className="fa fa-fw fa-tasks" aria-hidden="true"></i><span>Add Task</span></Link>

            </div>
        </div>
    </div>
  )

}

export default DashboardLeft
