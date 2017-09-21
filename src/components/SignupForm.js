import React from 'react'
import Auth from '../adapters/auth'
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "engineer",
    bio: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    Auth.signup(this.state)
      .then((user) => {
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          role: "engineer",
          bio: ""
        })
        localStorage.setItem("token", user.jwt)
        localStorage.setItem('id', user.user.id)
        this.props.history.replace("/dashboard")
      })

  }

  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Sign Up</h1><Link to={`/login`}>Login</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label><input type="text" name="first_name" onChange={this.handleInputChange} value={this.state["first_name"]}/>
            <label>Last Name</label><input type="text" name="last_name" onChange={this.handleInputChange} value={this.state["last_name"]}/>
          </div>
          <div><label>Email</label><input type="email" name="email" onChange={this.handleInputChange} value={this.state.email}/></div>
          <div><label>Password</label><input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} /></div>

          <div>
            <label>Choose Your Role</label>
            <select name="role" value={this.state.role} onChange={this.handleInputChange}>
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="visionary">Visionary</option>
            </select>
          </div>
          <div><label>Tell Us a Little About yourself</label><textarea name="bio" onChange={this.handleInputChange} value={this.state.bio}></textarea></div>


          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default SignupForm
