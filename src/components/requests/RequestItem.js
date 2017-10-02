import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/users'
import { bindActionCreators } from 'redux'




class RequestItem extends React.Component {
  //const imgStyle = props.user["user_image"] ? {backgroundImage: 'url(../../images/' + props.user["user_image"] + ')'} : null

  handleAccept = () => {
    console.log();
    this.props.updateRequest(this.props.request, "accepted")
  }

  handleReject = () => {
    this.props.updateRequest(this.props.request, "rejected")
  }


  render() {
    console.log(this.props, "where the user at")
    if (this.props.request.user){
      const imgStyle = this.props.request.user["user_image"] ? {backgroundImage: 'url(../../images/' + this.props.request.user["user_image"] + ')'} : null
      return (
        <div className="request-item">
              <div style={imgStyle} className="small-avatar"></div>
              <div className="project-request-info">
                <Link to={`/user/${this.props.request.user.id}`}><h3>{this.props.request.user.first_name} {this.props.request.user.last_name}</h3></Link>
                <h4>{this.props.request.user.role}</h4>
              </div>
              <div className="button-holders">
                <button className="button" onClick={this.handleAccept}>Accept</button>
                <button className="button" onClick={this.handleReject}>Reject</button>
              </div>

        </div>
      )
    } else {
      <div></div>
    }

  }


}


// <div style={imgStyle} className="small-avatar"></div>
// <div className="user-info">
//   <Link to={`./profile/${props.user.id}`}><h3>{props.user["first_name"]} {props.user["last_name"]}</h3></Link>
//   <h4>{props.user.role}</h4>
// </div>




export default RequestItem
