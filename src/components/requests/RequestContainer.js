import React from 'react'
import { connect } from 'react-redux'
import ProjectRequest from '../projects/ProjectRequest'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from '../Loader'


class RequestContainer extends React.Component {


  componentDidMount(){
    this.props.fetchUserCreatedProjects(localStorage.getItem("id"))
  }

  filteredProjects = () => {
    return this.props.userCreatedProjects.filter(project => project.requests)

  }

  updateRequest = (request, newStatus) => {
      this.props.updateRequest(request, newStatus)
  }


  render() {

    if (!this.props.isLoading && this.props.userCreatedProjects) {
      const userProjects = this.filteredProjects().map((project, index) => <ProjectRequest key={index} project={project} updateRequest={this.updateRequest}/>)

        return (
          <div className="request-container">
            { userProjects.length != 0 ? <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {userProjects}
              </ReactCSSTransitionGroup> : <p>You have no projects</p>
            }
          </div>
        )
    } else {
      return (<Loader/>)
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
