import React from 'react'
import Auth from '../adapters/auth'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()


    const userParams = {
      email: this.state.email,
      password: this.state.password
    }
    Auth.login(userParams)
      .then((user) => {
        this.setState({
          email: "",
          password: ""
        })
        localStorage.setItem("token", user.jwt)
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
      <div>
        <h1>Log In</h1><Link to={`/signup`}>Register</Link>
        <form onSubmit={this.handleSubmit}>
          <div><label>Email</label><input type="email" name="email" onChange={this.handleInputChange} value={this.state.email}/></div>
          <div><label>Password</label><input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} /></div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default LoginForm
