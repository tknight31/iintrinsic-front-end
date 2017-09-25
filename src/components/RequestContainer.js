import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ProjectRequest from './ProjectRequest'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'


class RequestContainer extends React.Component {

  filteredProjects = () => {
    this.props.currentUser.projects.filter(project => project.requests)
  }


  render() {

    if (!this.props.isLoading && this.props.currentUser["created_projects"]) {
      const userProjects = this.props.currentUser["created_projects"].map((project, index) => <ProjectRequest key={index} project={project}/>)
        return (
          <div>{userProjects}</div>
        )
    } else {
      return (<div><p>Loading</p></div>)
    }
  }

}


function mapStateToProps(state) {
  return {
     currentUser: state.users.currentUser,
     isLoading:state.users.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer)
