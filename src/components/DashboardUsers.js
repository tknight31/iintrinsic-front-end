import React from 'react'
import UserItem from './users/UserItem'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'

class DashboardUsers extends React.Component  {
  componentDidMount() {
     this.props.fetchUsers()
  }

  filteredUsers() {
    return this.props.users.filter(user => user.id !== parseInt(localStorage.getItem("id")))
  }

  render() {

    const allUsers = this.filteredUsers().map((user, index) => <UserItem key={index} user={user}/>)
    return (
      <div className="dash-users">
        {allUsers}
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
     users: state.users.list
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardUsers)
