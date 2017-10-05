import React from 'react'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/users'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'
import ProjectUserList from './ProjectUserList'
import GoalItem from '../goals/GoalItem'
import Loader from '../Loader'
import { Link } from 'react-router-dom'



class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.actions.getProjectData(this.props.match.params.id)
    this.props.actions.getProjectUsers(this.props.match.params.id)
  }


  handleRequest = () => {
    this.props.actions.makeRequest(this.props.project)
  }

  handleClick = () => {
    this.props.actions.removeProject(this.props.match.params.id)
  }

  goalUpdate = (obj) => {
    console.log("gonna update this goal", obj);
  }

  alreadyInProject = () => {
    return this.props.project.users.some(function(user) {
      return user.id === parseInt(localStorage.getItem("id"))
    })
  }

  render() {
    const imgStyle = this.props.project.project_image ? {backgroundImage: 'url(' + this.props.project.project_image + ')'} : null

    const projectGoals = this.props.goals.map((goal, index) => <GoalItem key={index} goal={goal} goalUpdate={this.goalUpdate} />)
    if (!this.props.isLoadingProjects && this.props.project.creator) {
      const imgStyleCreator = this.props.project.creator.user_image ? {backgroundImage: 'url(' + this.props.project.creator.user_image + ')'} : null
      const requestButton =  this.alreadyInProject() ? <button className="button deactive">Requested</button> : <button className="button" onClick={this.handleRequest}>Join</button>

      return (
        <div className="project-show-container">
          <div className="project-main-head">
            <div className="project-creator">
              <div style={imgStyleCreator} className="small-avatar"></div>
              <p>
                By {this.props.project.creator.first_name} {this.props.project.creator.last_name}<br/>
              <span>First Created</span>
                {this.props.project.creator.id ===this.props.currentUser.id ? <div><Link to={`/project/edit/${this.props.project.id}`}>Edit</Link> <Link onClick={this.handleClick} to={`/user/${this.props.project.creator.id}`}>Delete</Link></div> : <div>{requestButton}</div>}
              </p>
            </div>
            <div className="project-head">
              <h2>{this.props.project.name}</h2>
              <p>{this.props.project.short_desc}</p>
            </div>
          </div>

          <div className="project-show-details">

            <div className="project-show-image">
                <div style={imgStyle}></div>
            </div>

            <div className="project-show-goals">
              <h2>Project Goals</h2>
                {projectGoals}
            </div>

          </div>

          <p>{this.props.project.long_desc}</p>
          <div className="project-show-users">
              <h2>Group Members</h2>
              <ProjectUserList users={this.props.projectUsers} creator={this.props.project.creator}/>
          </div>
        </div>

      )
    } else {
      return (<Loader/>)
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
