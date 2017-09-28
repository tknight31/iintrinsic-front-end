import React from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'

class MyProjects extends React.Component {
  componentDidMount() {
    this.props.fetchUserCreatedProjects(localStorage.getItem("id"))
  }


  render() {
    return (
      <div className="my-projects">
        <div className="dash-main-head">
          <h2>My Projects</h2>
        </div>
        <ProjectList projects={this.props.projects}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
     projects: state.projects.userCreatedProjects
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects)
