import React from 'react'
import UserItem from './UserItem'
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'

class DashboardUsers extends React.Component  {
  componentDidMount() {
     this.props.fetchUsers()
  }

  render() {

    const allUsers = this.props.users.map((user, index) => <UserItem key={index} firstName={user["first_name"]} lastName={user["last_name"]} />)
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
