import React from 'react'
import { Route } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import DashboardLeft from './DashboardLeft'
import DashboardUsers from './DashboardUsers'
import ProjectsContainer from './projects/ProjectsContainer'
import MyProjects from './projects/MyProjects'
import RequestContainer from './requests/RequestContainer'
import ProjectShow from './projects/ProjectShow'
import ProjectForm from './projects/ProjectForm'
import ProjectEdit from './projects/ProjectEdit'
import UserProfile from './users/UserProfile'
import ProfileEditForm from './users/ProfileEditForm'
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
                  <Route exact path="/home" render={(props) => <ProjectsContainer currentUser={this.props.currentUser} {...props}/>}/>
                  <Route exact path="/projects/new" component={ProjectForm}/>
                  <Route exact path="/projects/" component={MyProjects}/>
                  <Route exact path="/user/:id" component={UserProfile}/>
                  <Route exact path="/project/:id" component={ProjectShow}/>
                  <Route exact path="/requests" component={RequestContainer}/>
                  <Route exact path="/project/edit/:id" render={(props) => <ProjectEdit currentUser={this.props.currentUser} {...props}/>}/>
                  <Route exact path="/users/edit/" render={(props) => <ProfileEditForm updateUserInfo={this.props.updateUserInfo} currentUser={this.props.currentUser} userImage={this.props.userImage} {...props}/>}/>
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
