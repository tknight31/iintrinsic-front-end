import React from 'react'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/users'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'
import ProjectUserList from './ProjectUserList'
import GoalItem from '../goals/GoalItem'
import { Link } from 'react-router-dom'



class ProjectShow extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.actions.getProjectData(this.props.match.params.id)
    this.props.actions.getProjectUsers(this.props.match.params.id)
  }

  handleClick = () => {
    this.props.actions.removeProject(this.props.match.params.id)
  }

  render() {
    console.log(this.props, "project details");

    const projectGoals = this.props.goals.map((goal, index) => <GoalItem key={index} goal={goal}/>)

    if (!this.props.isLoadingProjects && this.props.project.creator) {
      return (
        <div className="project-show-container">
          <div className="dash-main-head">
            <h2>{this.props.project.name}</h2>
            {this.props.project.creator.id ===this.props.currentUser.id ? <div><Link to={`/project/edit/${this.props.project.id}`}>Edit</Link> <Link onClick={this.handleClick} to={`/dashboard/projects/all`}>Delete</Link></div> : null}
          </div>
          <p>{this.props.project.long_desc}</p>
          <div className="project-show-details">
            <div className="project-show-goals">
              <h2>Project Goals</h2>
                {projectGoals}
            </div>
            <div className="project-show-progress">
              <h2>Progress</h2>
              <div className="user-progress">User</div>
              <div className="user-progress">User</div>
              <div className="user-progress">User</div>
            </div>
          </div>
          <div className="project-show-users">
              <h2>Group Members</h2>
              <ProjectUserList users={this.props.projectUsers} creator={this.props.project.creator}/>
          </div>
        </div>

      )
    } else {
      return (<div><p>Loading</p></div>)
    }
  }



}


function mapStateToProps(state) {
  return {
     project: state.projects.displayedProject,
     projectImage: state.projects.projectImage,
     goals: state.projects.displayedGoals,
     projectUsers: state.projects.users,
     currentUser: state.users.currentUser,
     isLoadingUsers:state.users.isLoading,
     isLoadingProjects:state.projects.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, UserActions, ProjectActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
