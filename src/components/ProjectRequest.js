import React from 'react'
import { Link } from 'react-router-dom'
import RequestItem from './RequestItem'


const ProjectRequest = (props) => {


  const filteredRequests = () => {
    return props.project.requests.filter(request => request['current_status'] == 'pending')
  }
  //const imgStyle = props.user["user_image"] ? {backgroundImage: 'url(../../images/' + props.user["user_image"] + ')'} : null

  console.log(props.project, "HERES IS THE PROJECT ");
  if(props.project.requests){
    console.log(filteredRequests(), "HERES IS THE filteredd reQUESSTS ");
    const requests = filteredRequests().map((request, index) => <RequestItem key={index} request={request}/>)
    return (
      <div className="project-request">
        <h1>{props.project.name}</h1>
        <div className="requests">
            {requests}
        </div>
      </div>
    )
  }
}

export default ProjectRequest
