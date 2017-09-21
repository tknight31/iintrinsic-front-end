import React from 'react'
import authorize from './hocs/authorize'
import Auth from '../adapters/auth'
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
        <div className="dash-left">Left Nav</div>
        <div className="dash-right">
          <div className="header dash-header">Header <button onClick={this.logout}>Logout</button></div>
          <div className="dash-main">
            <p>Welcome To the Dashboard</p>
            <div>
              <ProjectsContainer/>
              <ProjectForm/>
            </div>
          </div>
          <div className="dash-users">Users</div>
        </div>

      </div>
    )
  }
}

export default Dashboard
