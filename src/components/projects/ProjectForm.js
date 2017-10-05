import React from 'react'
import UploadPhotoDropNew from '../UploadPhotoDropNew'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'
import FormGoal from '../goals/FormGoal'
import {Input} from 'react-materialize'

class ProjectsForm extends React.Component {
  state = {
    name: "",
    category: "",
    "short_desc" : "",
    "long_desc" : "",
    description : "",
    project_image: "",
    goals: []
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addProject({
      name: this.state.name,
      category: this.state.category,
      short_desc: this.state.short_desc,
      long_desc: this.state.long_desc,
      goals: this.state.goals,
      project_image: this.state.project_image
    })

    this.setState({
      name: "",
      category: "",
      "short_desc": "",
      "long_desc": "",
      description : "",
      project_image: ""
    })

      this.props.history.replace(`/user/${localStorage.getItem("id")}`)
  }

  handleGoalSubmit = (event) => {
    event.preventDefault()

    this.setState({
      goals: [...this.state.goals, {description: this.state.description}],
      description : ""
    })
  }

  handleDelete = (obj) => {

    const goalsArr = this.state.goals

    const filteredGoals = this.state.goals.filter(goal => goal != obj)

    this.setState({
      goals: filteredGoals
    })

  }
  addImageToState = (fileURL) => {
    this.setState({
      project_image : fileURL
    })
  }


  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }


  render() {

    const imgStyle = this.state.project_image ? {backgroundImage: 'url(' + this.state.project_image + ')'} : null

    const goals = this.state.goals.map((goal, index) => <FormGoal key={index} goal={goal} handleDelete={this.handleDelete}/>)
    console.log(this.state.goals);
    return (
      <div className="project-form-wrapper">
        <div className="top-form">
          <div className="edit-image-upload">
            <div className="profile-image-border">
              <div style={imgStyle} className="project-image-preview"></div>
            </div>
            <UploadPhotoDropNew addImageToState={this.addImageToState}/>
          </div>
          <div className="goal-form-wrapper">
            <form onSubmit={this.handleGoalSubmit} className="goal-form">

              <Input type="text" label="Project Goal" name="description" onChange={this.handleInputChange} value={this.state.description} />
              <input className="button" type="submit" value="Add"/>
            </form>
            <div>
              {goals}
            </div>
        </div>

        </div>

        <form onSubmit={this.handleSubmit} className="project-form">
          <Input type="text" label="Project Name" name="name" onChange={this.handleInputChange} value={this.state.name} />
            <Input type="text" label="Project Category" name="category" onChange={this.handleInputChange} value={this.state.category} />

            <textarea id="textarea1" className="materialize-textarea" name="short_desc" onChange={this.handleInputChange} value={this.state.short_desc}></textarea>
              <label for="textarea1">Short Description</label>

            <textarea id="textarea2" className="materialize-textarea" name="long_desc" onChange={this.handleInputChange} value={this.state.long_desc}></textarea>
              <label for="textarea2">Project Long Desc</label>
              
          <input className="button" type="submit" value="Submit"/>
        </form>



      </div>

    )

  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null,mapDispatchToProps)(ProjectsForm)
