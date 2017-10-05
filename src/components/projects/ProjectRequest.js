import React from 'react'
import { Link } from 'react-router-dom'
import RequestItem from '../requests/RequestItem'
import { TweenMax } from 'gsap'




class ProjectRequest extends React.Component {

  componentDidMount = () => {
     const els = document.querySelectorAll('.request-item')
     TweenMax.staggerFromTo(els, 1, {opacity: 0, y: -20}, {opacity: 1, y:0}, .2)
  }

  filteredRequests = () => {
    return this.props.project.requests.filter(request => request['current_status'] == 'pending')
  }

  requestUserIds = () => {
    return this.filteredRequests().map(request => request.user_id)
  }

  //const imgStyle = props.user["user_image"] ? {backgroundImage: 'url(../../images/' + props.user["user_image"] + ')'} : null
  render() {
    if(this.props.project.requests){
      const requests = this.filteredRequests().map((request, index) => <RequestItem key={index} request={request} updateRequest={this.props.updateRequest}/>)
      return (
        <div className="project-request">
          <h1>{this.props.project.name}</h1>
          <div className="requests">
              {this.filteredRequests().length != 0 ? requests : <p>No requests made for this project.</p>}
          </div>
        </div>
      )
    }
  }

}

export default ProjectRequest
