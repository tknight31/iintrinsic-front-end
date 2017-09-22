import React from 'react'
import Auth from '../adapters/auth'
import DashboardHeader from './DashboardHeader'
import DashboardLeft from './DashboardLeft'
import DashboardUsers from './DashboardUsers'
import ProjectsContainer from './ProjectsContainer'
import ProjectForm from './ProjectForm'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.setCurrentUser()
  }


  logout = () => {
    Auth.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="dash-wrapper">
        <DashboardLeft currentUser={this.props.currentUser}/>
        <div className="dash-right">
          <DashboardHeader logout={this.logout}/>
          <div className="dash-main">
            <p>Welcome To the Dashboard</p>
            <div>
              <ProjectsContainer/>
              <ProjectForm/>
            </div>
          </div>
          <DashboardUsers/>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
     currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
