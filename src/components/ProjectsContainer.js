import React from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
      console.log(this.props.projects);
    return (
      <div>
        <div className="dash-main-head">
          <h2>Welcome {this.props.currentUser["first_name"]}</h2>
        </div>
        <ProjectList projects={this.props.projects}/>
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
