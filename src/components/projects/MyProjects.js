import React from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'

class MyProjects extends React.Component {
  componentDidMount() {
    this.props.fetchUserCreatedProjects(localStorage.getItem("id"))

  }

  filteredProjects = () => {
    return this.props.currentUser.projects.filter(project => this.currUserAccepted(project))
  }

  currUserAccepted = (project) => {
    return project.requests.some(this.isCurrentUserAccepted)
  }

  isCurrentUserAccepted = (request, index, array) => {
    return (request.current_status === "accepted" && request.user_id === this.props.currentUser.id)
  }


  render() {
      console.log(this.props.currentUser.projects, "user proejects here");
    return (
      <div className="my-projects">
        <div className="dash-main-head">
          <h2>My Projects</h2>
        </div>
        <ProjectList isUser={true} userProjects={this.filteredProjects()} createdProjects={this.props.projects}/>
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
