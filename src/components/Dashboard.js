import React from 'react'
import Auth from '../adapters/auth'
import DashboardHeader from './DashboardHeader'
import DashboardLeft from './DashboardLeft'
import DashboardUsers from './DashboardUsers'
import ProjectsContainer from './ProjectsContainer'
import ProjectForm from './ProjectForm'


class Dashboard extends React.Component {

  logout = () => {
    Auth.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="dash-wrapper">
        <DashboardLeft/>
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

export default Dashboard
