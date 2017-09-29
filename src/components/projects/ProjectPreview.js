import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'


const ProjectPreview = (props) => {

  const handleClick = () => {
    props.makeRequest(props.project)
  }



  const imgStyle = props.project.creator["user_image"] ? {backgroundImage: 'url(' + props.project.creator["user_image"] + ')'} : null
  const imgStyleProj = props.project["project_image"] ? {backgroundImage: 'url(' + props.project["project_image"] + ')'} : null

  return (
    <div className="project-preview-item">
      <div style={imgStyleProj} className="project-preview-top"></div>
      <div className="project-preview-bottom">
        <div className="project-owner">
          <div style={imgStyle} className="small-avatar"></div>
        </div>
        <div className="project-info">
          <Link to={`/dashboard/project/${props.project.id}`}><h2>{props.project.name}</h2></Link>
          <h3>{props.project["category"]}</h3>
        </div>
      </div>

    </div>
  )

}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectPreview)

// AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU
