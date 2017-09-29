import React from 'react'
import { connect } from 'react-redux'
import ProjectRequest from '../projects/ProjectRequest'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'


class RequestContainer extends React.Component {


  componentDidMount(){
    this.props.fetchUserCreatedProjects(localStorage.getItem("id"))
  }

  filteredProjects = () => {
    return this.props.userCreatedProjects.filter(project => project.requests)

  }

  updateRequest = (request, newStatus) => {
    console.log(this.props, "function should be here");
      this.props.updateRequest(request, newStatus)
  }


  render() {

    if (!this.props.isLoading && this.props.userCreatedProjects) {
      console.log(this.props.userCreatedProjects, "heres the created projects");
      const userProjects = this.filteredProjects().map((project, index) => <ProjectRequest key={index} project={project} updateRequest={this.updateRequest}/>)
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
     userCreatedProjects: state.projects.userCreatedProjects,
     isLoading:state.projects.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer)
