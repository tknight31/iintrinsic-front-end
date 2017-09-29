import React from 'react'
import ProjectList from './ProjectList'
import MapContainer from '../MapContainer'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'


class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  filteredProjects() {
    return this.props.projects.filter(project => project.creator.id !== parseInt(localStorage.getItem("id")) && !project.creator["ghost_mode"] && project.creator.latitude)
  }

  render() {
    console.log(this.filteredProjects());
    return (
      <div>
        <div className="dash-main-head">
          <h2>Welcome {this.props.currentUser["first_name"]}</h2>
        </div>
        <div className="map-holder"><MapContainer/></div>
        <ProjectList projects={this.filteredProjects()}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
     projects: state.projects.list
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
