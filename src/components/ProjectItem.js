import React from 'react'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'


const ProjectItem = (props) => {

  const handleClick = () => {
    props.makeRequest(props.project)
  }

  const alreadyInProject = () => {
    return props.project.users.some(function(user) {
      return user.id === parseInt(localStorage.getItem("id"))
    })
  }

  const imgStyle = props.project.creator["user_image"] ? {backgroundImage: 'url(../../images/' + props.project.creator["user_image"] + ')'} : null
  return (
    <div className="project-item">
      <div className="project-owner">
        <div style={imgStyle} className="small-avatar"></div>
      </div>
      <div className="project-info">
        <h2>{props.project.name}</h2>
        <p>{props.project["short_desc"]}</p>
      </div>
      <div className="project-members">
        <p>Members</p>
        <strong>{props.project.users.length}</strong>
      </div>
      <div className="project-button">
        { alreadyInProject() ? <button className="button">View</button> : <button className="button" onClick={handleClick}>Join</button>}
      </div>

    </div>
  )

}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectItem)
