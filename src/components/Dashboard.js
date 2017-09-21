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
      <div>
        <p>Welcome To the Dashboard</p>
        <button onClick={this.logout}>Logout</button>
        <div>
          <ProjectsContainer/>
          <ProjectForm/>
        </div>
      </div>
    )
  }
}

export default Dashboard
