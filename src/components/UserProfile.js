import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'
import ProjectPreview from './ProjectPreview'
import SkillItem from './SkillItem'


class UserProfile extends React.Component {

  state = {
    name: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addSkillToUser(this.state.name)
    this.setState({
      name: ""
    })
  }

  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }

  componentDidMount() {
    this.props.getUserData(this.props.match.params.id)
  }

  isCurrentUser() {
    return this.props.currentUser.id === this.props.user.id
  }

  render() {
      const imgStyle = this.props.user["user_image"] ? {backgroundImage: 'url(../../images/' + this.props.user["user_image"] + ')'} : null
      const numberOfProjects = this.props.user.projects ? this.props.user.projects.length : null

      const currUserProjects = this.props.user.projects ? this.props.user.projects.map((project, index) => <ProjectPreview key={index} project={project}/>) : null
      const currUserSkills = this.props.user.skills ? this.props.user.skills.map((skill, index) => <SkillItem key={index} skill={skill}/>) : null

      const skillsForm = <form className="skills-form" onSubmit={this.handleSubmit}>
              <div><label>Add</label><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /><input type="submit" value="Submit"/></div>
              </form>


    if (!this.props.isLoading) {
        return (
          <div className="user-profile-container">

            <div className="user-profile-info">
              <div className="profile-image" style={imgStyle}></div>
              <div className="profile-mid">
                <h2>{this.props.user["first_name"]} {this.props.user["last_name"]}</h2>
                <h4>{this.props.user["role"]}</h4>
                <p>{this.props.user.bio}</p>
                <button className="button">Message</button>
              </div>
              <div className="profile-right">
                <p><a href={'"mailto:' + this.props.user.email + '"'}>{this.props.user.email}</a></p>
                <p>Projects Worked On: {numberOfProjects}</p>
              </div>
            </div>

            <h2>Skills</h2>
            {this.isCurrentUser() ? skillsForm : null}
            <div className="skills-list">
                {currUserSkills}
            </div>

            <h2>Projects {this.isCurrentUser() ? <span className="header-link"><Link className="button" to={`/dashboard/projects/new`}>Create New</Link></span> : null}</h2>
            <div className="profile-projects">
                {currUserProjects}
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
     user: state.users.displayedUser,
     currentUser: state.users.currentUser,
     isLoading:state.users.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
