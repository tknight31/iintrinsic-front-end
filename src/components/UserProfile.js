import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import * as SkillActions from '../actions/skills'
import { bindActionCreators } from 'redux'
import ProjectPreview from './ProjectPreview'
import SkillsList from './SkillsList'
import SkillItem from './SkillItem'
import { TweenMax } from 'gsap'
import { CSSTransitionGroup } from 'react-transition-group'


class UserProfile extends React.Component {

  state = {
    name: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.addSkill(this.state.name)
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
    console.log(this.props)
    this.props.actions.getUserData(this.props.match.params.id)
    this.props.actions.fetchSkills(this.props.match.params.id)
    const els = document.querySelectorAll('.project-item')
    TweenMax.staggerFromTo(els, 1, {opacity: 0, y: -20}, {opacity: 1, y:0}, .2)
  }

  isCurrentUser() {
    return this.props.currentUser.id === this.props.user.id
  }

  render() {
      const imgStyle = this.props.user["user_image"] ? {backgroundImage: 'url(' + this.props.user["user_image"] + ')'} : null
      const numberOfProjects = this.props.user.projects ? this.props.user.projects.length : null

      const currUserProjects = this.props.user.projects ? this.props.user.projects.map((project, index) => <ProjectPreview key={index} project={project}/>) : null
      const currUserCreatedProjects = this.props.user.created_projects ? this.props.user.created_projects.map((project, index) => <ProjectPreview key={index} project={project}/>) : null
      const currUserSkills = this.props.user.skills ? this.props.user.skills.map((skill, index) => <SkillItem key={index} skill={skill}/>) : null

      const skillsForm = <form className="skills-form" onSubmit={this.handleSubmit}>
              <div><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /><input type="submit" className="button" value="Add"/></div>
              </form>


    if (!this.props.isLoadingUsers) {
        return (
          <div className="user-profile-container">

            <div className="user-profile-info">
              <div className="profile-image-border"><div className="profile-image" style={imgStyle}></div></div>
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
            <div className="skills-head">
              <h2>Skills</h2>
              {this.isCurrentUser() ? skillsForm : null}
            </div>
            <SkillsList skills={this.props.skills} removeSkill={this.props.actions.removeSkill} isCurrentUser={this.isCurrentUser()}/>

            <h2>Projects {this.isCurrentUser() ? <span className="header-link"><Link className="button" to={`/dashboard/projects/new`}>Create New</Link></span> : null}</h2>
            <div className="profile-projects">
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                  <h3>Created</h3>
                  {currUserCreatedProjects}
                  <h3>Collaborated</h3>
                    {currUserProjects}
                </CSSTransitionGroup>
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
     isLoadingUsers:state.users.isLoading,
     skills: state.skills.list,
     isLoadingSkills:state.skills.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, UserActions, SkillActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
