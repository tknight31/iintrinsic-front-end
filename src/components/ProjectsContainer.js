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
    console.log(this.props)

    return (
      <div>
        <ProjectList projects={this.props.projects}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
     projects: state.projects.list
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
