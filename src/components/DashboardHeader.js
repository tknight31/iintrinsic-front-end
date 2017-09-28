import React from 'react'
import { Link } from 'react-router-dom'
import GhostMode from './GhostMode'


 class DashboardHeader extends React.Component {

   constructor(props) {
     super(props)

     this.state={
       value: this.props.ghost_mode
     }
   }

  render(){


    return (
      <div className="header dash-header">
        <div className="head-menu menu-left">
          <p>intrinsic</p> <Link className="button" to={`/dashboard/projects/new`}>New Project</Link>
        </div>
        <div className="head-menu menu-right">
            <GhostMode/>
          <Link to={`/dashboard/home`}>Home</Link>
          <button className="button" onClick={this.props.logout}>Logout</button>
        </div>



      </div>
    )
  }


}


export default DashboardHeader
