import React from 'react'
import { Link } from 'react-router-dom'
import RequestItem from '../requests/RequestItem'


class ProjectRequest extends React.Component {


  filteredRequests = () => {
    return this.props.project.requests.filter(request => request['current_status'] == 'pending')
  }

  requestUserIds = () => {
    return this.filteredRequests().map(request => request.user_id)
  }

  //const imgStyle = props.user["user_image"] ? {backgroundImage: 'url(../../images/' + props.user["user_image"] + ')'} : null
  render() {
    console.log(this.props.project, "HERES IS THE PROJECT ");
    if(this.props.project.requests){
      console.log(this.filteredRequests(), "HERES IS THE filteredd reQUESSTS ");
      const requests = this.filteredRequests().map((request, index) => <RequestItem key={index} request={request} updateRequest={this.props.updateRequest}/>)
      return (
        <div className="project-request">
          <h1>{this.props.project.name}</h1>
          <div className="requests">
              {requests}
          </div>
        </div>
      )
    }
  }

}

export default ProjectRequest
