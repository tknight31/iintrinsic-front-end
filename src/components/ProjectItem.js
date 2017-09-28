import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'
import { CSSTransitionGroup } from 'react-transition-group'



const ProjectItem = (props) => {

  const handleClick = () => {
    props.makeRequest(props.project)
  }

  const alreadyInProject = () => {
    return props.project.users.some(function(user) {
      return user.id === parseInt(localStorage.getItem("id"))
    })
  }

  const imgStyle = props.project.creator["user_image"] ? {backgroundImage: 'url(' + props.project.creator["user_image"] + ')'} : null
  return (
    <div className="project-item">
      <div className="project-owner">
        <div style={imgStyle} className="small-avatar"></div>
      </div>
      <div className="project-info">
        <Link to={`/dashboard/project/${props.project.id}`}><h2>{props.project.name}</h2></Link>
        <p>{props.project["short_desc"]}</p>
      </div>
      <div className="project-members">
        <p>Members</p>
        <strong>{props.project.requests.filter(request => request.current_status === "accepted").length}</strong>
      </div>
      <div className="project-button">
        { alreadyInProject() ? <button className="button deactive">Requested</button> : <button className="button" onClick={handleClick}>Join</button>}
      </div>

    </div>
  )

}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectItem)
