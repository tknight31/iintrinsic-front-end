import React from 'react'
import Auth from '../adapters/auth'
import { Link } from 'react-router-dom'
import UploadPhotoDropNew from './UploadPhotoDropNew'
import SkillItem from './skills/SkillItem'


class SignupForm extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "engineer",
    bio: "",
    name: "",
    user_image: "",
    skills: []
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const signUpObj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      bio: this.state.bio,
      user_image: this.state.user_image
    }

    Auth.signup(signUpObj, this.state.skills)
      .then((user) => {
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          role: "engineer",
          bio: "",
          name: "",
          user_image: "",
          skills: []
        })
        localStorage.setItem("token", user.jwt)
        localStorage.setItem('id', user.user.id)
        this.props.history.replace("/dashboard/home")
      })

  }

  addImageToState = (fileURL) => {
    this.setState({
      user_image : fileURL
    })
  }

  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }

  handleSkillSubmit = (event) => {
    event.preventDefault()

    this.setState({
      skills: [...this.state.skills, {name: this.state.name}],
      name : ""
    })
  }

  removeSkill = (obj) => {
    const skillsArr = this.state.skills
    const filteredSkills = this.state.skills.filter(skill => skill != obj)

    this.setState({
      goals: filteredSkills
    })

  }



  render() {

    const imgStyle = this.state.user_image ? {backgroundImage: 'url(' + this.state.user_image + ')'} : null
    const skills = this.state.skills.map((skill, index) => <SkillItem key={index} skill={skill} removeSkill={this.removeSkill}/>)


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
          <input className="button" type="submit" value="Login"/>
        </form>

        <div className="edit-image-upload">
          <div className="profile-image-border">
            <div style={imgStyle} className="large-avatar profile-image"></div>
          </div>
          <UploadPhotoDropNew addImageToState={this.addImageToState}/>
        </div>

        <div className="skill-form-wrapper">
          <form onSubmit={this.handleSkillSubmit} className="goal-form">
            <div><label>Add Some Skills</label><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /></div>
            <input className="button" type="submit" value="Add"/>
          </form>
          <div className="signup-skills-holder">
            {skills}
          </div>
        </div>
      </div>

    )
  }
}

export default SignupForm
