import React from 'react'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'


const ProjectPreview = (props) => {

  const handleClick = () => {
    props.makeRequest(props.project)
  }



  const imgStyle = props.project.creator["user_image"] ? {backgroundImage: 'url(' + props.project.creator["user_image"] + ')'} : null
  return (
    <div className="project-item">
      <div className="project-owner">
        <div style={imgStyle} className="small-avatar"></div>
      </div>
      <div className="project-info">
        <h2>{props.project.name}</h2>
        <h3>{props.project["category"]}</h3>
      </div>


    </div>
  )

}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectPreview)

// AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU
