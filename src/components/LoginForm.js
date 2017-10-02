import React from 'react'
import Auth from '../adapters/auth'
import { Link } from 'react-router-dom'
import {Input} from 'react-materialize'

class LoginForm extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    Auth.login(this.state)
      .then((user) => {
        this.setState({
          email: "",
          password: ""
        })
        localStorage.setItem("token", user.jwt)
        localStorage.setItem('id', user.user.id)
        this.props.history.replace("/home")
      })

  }

  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }



  render() {
    console.log(this.props)
    return (
      <div className="auth-page">
        <h1 className="main">Log In</h1>
        <div className="form-container">
          <div className="form-wrapper login">
            <form onSubmit={this.handleSubmit}>
              <div><Input type="email" name="email" label="email" onChange={this.handleInputChange} value={this.state.email}/></div>
              <div><Input type="password" name="password" label="Password" onChange={this.handleInputChange} value={this.state.password} /></div>
              <input type="submit" value="Login" className="button"/>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default LoginForm
