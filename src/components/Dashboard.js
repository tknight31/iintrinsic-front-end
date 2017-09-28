import React from 'react'
import { Route } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import DashboardLeft from './DashboardLeft'
import DashboardUsers from './DashboardUsers'
import ProjectsContainer from './ProjectsContainer'
import MyProjects from './MyProjects'
import RequestContainer from './RequestContainer'
import ProjectShow from './ProjectShow'
import ProjectForm from './ProjectForm'
import UserProfile from './UserProfile'
import ProfileEditForm from './ProfileEditForm'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.setCurrentUser()
  }

  logout = () => {
    this.props.logoutUser()
    this.props.history.push('/login')

  }

  render() {

    if (!this.props.isLoading && this.props.currentUser) {
      return (
          <div className="dash-wrapper">
            <DashboardLeft currentUser={this.props.currentUser} userImage={this.props.userImage}/>
            <div className="dash-right">
              <DashboardHeader logout={this.logout} currentUser={this.props.currentUser}/>
              <div className="dash-main">

                <div>
                  <Route path="/dashboard/home" render={(props) => <ProjectsContainer currentUser={this.props.currentUser} {...props}/>}/>
                  <Route path="/dashboard/projects/new" component={ProjectForm}/>
                  <Route path="/dashboard/projects/all" component={MyProjects}/>
                  <Route path="/dashboard/profile/:id" component={UserProfile}/>
                  <Route path="/dashboard/project/:id" component={ProjectShow}/>
                  <Route path="/dashboard/requests" component={RequestContainer}/>
                  <Route path="/dashboard/user/edit" render={(props) => <ProfileEditForm updateUserInfo={this.props.updateUserInfo} currentUser={this.props.currentUser} userImage={this.props.userImage} {...props}/>}/>
                </div>
              </div>
              <DashboardUsers/>
            </div>

          </div>
        )
    } else {
      return (
        <div>Loaddddding....</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
     currentUser: state.users.currentUser,
     userImage: state.users.userImage
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
