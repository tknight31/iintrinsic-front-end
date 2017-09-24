import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'
import ProjectPreview from './ProjectPreview'


class UserProfile extends React.Component {

  componentDidMount() {
    this.props.getUserData(this.props.match.params.id)
  }

  render() {
    console.log(this.props.user.projects, "HERE");
      const imgStyle = this.props.user["user_image"] ? {backgroundImage: 'url(../../images/' + this.props.user["user_image"] + ')'} : null
      const numberOfProjects = this.props.user.projects ? this.props.user.projects.length : null

      const currUserProjects = this.props.user.projects ? this.props.user.projects.map((project, index) => <ProjectPreview key={index} project={project}/>) : null

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
            <div className="profile-projects">
                {currUserProjects}
            </div>

            <h2>Projects</h2>
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
     isLoading:state.users.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
