import React from 'react'
import Auth from '../adapters/auth'
import { Link } from 'react-router-dom'
import UploadPhotoDropNew from './UploadPhotoDropNew'
import SkillItem from './skills/SkillItem'
import {Input} from 'react-materialize'


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
    skills: [],
    partOne: true,
    partTwo: false
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
        this.props.history.replace("/home")
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
      skills: filteredSkills
    })

  }

  switchForm = () => {
    this.setState({
      partOne: !this.state.partOne,
      partTwo: !this.state.partTwo,
    })
  }



  render() {

    const imgStyle = this.state.user_image ? {backgroundImage: 'url(' + this.state.user_image + ')'} : null
    const skills = this.state.skills.map((skill, index) => <SkillItem key={index} skill={skill} removeSkill={this.removeSkill}/>)


    return (
      <div className="auth-page">

        <h1 className="main">Sign Up</h1>
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-wrapper">
            <h4>Basic Info</h4>
            <div className="form-group form-divided">
              <div><Input s={6} type="text" validate={true} label="First Name" name="first_name" onChange={this.handleInputChange} value={this.state["first_name"]}/></div>
              <div><Input s={6} type="text" label="Last Name" name="last_name" onChange={this.handleInputChange} value={this.state["last_name"]}/></div>
            </div>

            <div className="form-group form-divided">
              <div><Input s={6} type="email" label="email" name="email" onChange={this.handleInputChange} value={this.state.email}/></div>
              <div><Input s={6} type="password" label="Password" name="password" onChange={this.handleInputChange} value={this.state.password}/></div>
            </div>
            <div className="form-group">
                <Input s={12} type="select" label="Choose Your Role" name="role" value={this.state.role} onChange={this.handleInputChange}>
                  <option value="engineer">Engineer</option>
                  <option value="designer">Designer</option>
                  <option value="visionary">Visionary</option>
                </Input>
            </div>

            <div className="input-field s12">
              <textarea id="textarea1" className="materialize-textarea" name="bio" onChange={this.handleInputChange} value={this.state.bio}></textarea>
              <label for="textarea1">Tell Us a Little About yourself</label>
            </div>

            <input type="submit" className="button signup-submit" value="Submit"/>
          </div>



        </form>

        <div className="form-wrapper">
          <p>Upload A Photo</p>
          <div className="edit-image-upload">
            <div className="profile-image-border">
              <div style={imgStyle} className="large-avatar profile-image"></div>
            </div>
            <UploadPhotoDropNew addImageToState={this.addImageToState}/>
          </div>

          <div className="skill-form-wrapper">
            <form onSubmit={this.handleSkillSubmit} className="goal-form">
              <Input type="text" label="Add Some Skills" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                <div><input className="button" type="submit" value="Add"/></div>
            </form>
            <div className="signup-skills-holder">
              <span>Skills:</span>
              {skills}
            </div>
          </div>

        </div>
      </div>
      </div>

    )
  }
}

export default SignupForm
