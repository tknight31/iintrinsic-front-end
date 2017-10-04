import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLeft = (props) => {

    const imgStyle = props.userImage ? {backgroundImage: 'url(' + props.userImage + ')'} : null

    const pendingRequests = (project) => {
      return project.requests.some(isPending)
    }

    const isPending = (request, index, array) => {
      return request.current_status === "pending"
    }

    const allPendingRequests = props.currentUser.created_projects.filter(project => pendingRequests(project))



  return (
    <div className="dash-left">
        <div className="logo logo-text">
            iintrinsic
        </div>
        <div className="avatar">
            <Link to={`/user/${props.currentUser.id}`}><div className="profile-image" style={imgStyle}></div></Link>
            <Link to={`/user/${props.currentUser.id}`}><h3>{props.currentUser["first_name"]} {props.currentUser["last_name"]}</h3></Link>
            <h4>{props.currentUser.role}</h4>
        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <div className="left-nav-links">
              <Link to={`/home`}><div className="link-bg"></div><i className="fa fa-fw fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></Link>
              <Link to={`/projects/`}><div className="link-bg"></div><i className="fa fa-fw fa-line-chart" aria-hidden="true"></i><span>My Projects</span></Link>
              <Link to={`/user/${props.currentUser.id}`}><div className="link-bg"></div><i className="fa fa-fw fa-user" aria-hidden="true"></i><span>My Profile</span></Link>
              <Link to={`/users/edit`}><div className="link-bg"></div><i className="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i><span>Edit Profile</span></Link>
              <Link to={`/messages`}><div className="link-bg"></div><i className="fa fa-fw fa-comments-o" aria-hidden="true"></i><span>Messages</span></Link>
            </div>

        </div>
        <div className="left-nav">
            <p>Navigate</p>
            <div className="left-nav-links">
              <Link to={`/projects/new`}><div className="link-bg"></div><i className="fa fa-fw fa-plus-square" aria-hidden="true"></i><span>Create New</span></Link>
              <Link to={`/requests`}><div className="link-bg"></div><i className="fa fa-fw fa-user-plus" aria-hidden="true"></i><span>Project Requests</span> <strong>{allPendingRequests.length}</strong></Link>
              <Link to={`/task`}><div className="link-bg"></div><i className="fa fa-fw fa-tasks" aria-hidden="true"></i><span>Add Task</span></Link>
            </div>
        </div>
    </div>
  )

}

export default DashboardLeft
