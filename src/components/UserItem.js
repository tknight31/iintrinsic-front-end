import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = (props) => {
  const imgStyle = props.user["user_image"] ? {backgroundImage: 'url(../../images/' + props.user["user_image"] + ')'} : null
  return (
    <div className="user-item">
      <div style={imgStyle} className="small-avatar"></div>
      <div className="user-info">
        <Link to={`/dashboard/profile/${props.user.id}`}><h3>{props.user["first_name"]} {props.user["last_name"]}</h3></Link>
        <h4>{props.user.role}</h4>
      </div>

    </div>
  )

}

export default UserItem
