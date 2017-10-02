import React from 'react'
import { Link } from 'react-router-dom'
import GhostMode from './users/GhostMode'
import DropdownMenu from 'react-dd-menu';


 class DashboardHeader extends React.Component {

   constructor(props) {
     super(props)

     this.state={
       value: this.props.ghost_mode,
       isMenuOpen: false
     }
   }


  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close = () => {
    this.setState({ isMenuOpen: false });
  }

  click = () => {
    console.log('You clicked an item');
  }

  render(){
    const imgStyle = this.props.currentUser["user_image"] ? {backgroundImage: 'url(' + this.props.currentUser["user_image"] + ')'} : null
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <p className="name-menu" onClick={this.toggle}>{this.props.currentUser["first_name"]} {this.props.currentUser["last_name"]} <i className="fa fa-fw fa-caret-down" aria-hidden="true"></i></p>,
      align: 'right'
    }

    return (
      <div className="header dash-header">
        <div className="head-menu menu-left">
          <p>intrinsic</p> <Link className="button" to={`/projects/new`}>New Project</Link>
        </div>
        <div className="head-menu menu-right">
            <GhostMode/>

          <DropdownMenu {...menuOptions}>
            <li><Link to={`/user/${this.props.currentUser.id}`}><i className="fa fa-fw fa-user" aria-hidden="true"></i>View Profile</Link></li>
            <li><button type="button" onClick={this.props.logout}><i className="fa fa-fw fa-sign-out" aria-hidden="true"></i> Logout</button></li>
          </DropdownMenu>
          <div style={imgStyle} className="small-avatar"></div>
        </div>



      </div>
    )
  }


}


export default DashboardHeader
