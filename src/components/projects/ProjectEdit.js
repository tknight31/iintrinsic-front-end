import React from 'react'
import UploadPhotoDrop from './UploadPhotoDrop'
import { connect } from 'react-redux'
import * as ProjectActions from '../../actions/projects'
import { bindActionCreators } from 'redux'
import FormGoal from '../goals/FormGoal'


class ProjectEdit extends React.Component {

    state = {
      name: "",
      category: "",
      short_desc : "",
      long_desc : "",
      description : ""
    }

    componentDidMount(){
      this.setState({
        name: this.props.project.name,
        category: this.props.project.category,
        short_desc : this.props.project.short_desc,
        long_desc : this.props.project.long_desc
      })
    }

    handleGoalSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.description);

      this.props.addNewGoal({description: this.state.description, id: this.props.project.id})

      this.setState({
        description : ""
      })

    }

    handleDelete = (obj) => {
      this.props.removeGoal(obj)
    }



    handleSubmit = (event) => {
      event.preventDefault()
      const updatedProject = {
        name: this.state.name,
        category: this.state.category,
        short_desc: this.state.short_desc,
        long_desc: this.state.long_desc,
        id: this.props.project.id
      }

      this.props.updateProjectInfo(updatedProject)
      this.props.history.replace("/dashboard/home")


    }

    handleInputChange = (event) => {
      const currInput = event.target.name
      this.setState({
        [currInput] : event.target.value
      })
    }


  render() {

    const imgStyle = this.props.projectImage ? {backgroundImage: 'url(' + this.props.projectImage + ')'} : null

    const goals = this.props.goals.map((goal, index) => <FormGoal key={index} goal={goal} handleDelete={this.handleDelete}/>)


    return (
      <div>

        <div className="dash-main-head">
          <h2>Edit Project</h2>
        </div>

        <div className="edit-wrapper">
          <div className="edit-image-upload">
            <div className="profile-image-border">
              <div style={imgStyle} className="project-image-preview"></div>
            </div>
            <UploadPhotoDrop updateProjectImage={this.props.updateProjectImage} projectId={this.props.project.id}/>
          </div>
          <div className="edit-form">

          <form onSubmit={this.handleSubmit} className="project-form">
            <div><label>Project Name</label><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /></div>
            <div><label>Project Category</label><input type="text" name="category" onChange={this.handleInputChange} value={this.state.category} /></div>
            <div><label>Project Short Desc</label><textarea name="short_desc" onChange={this.handleInputChange} value={this.state["short_desc"]}></textarea></div>
            <div><label>Project Long Desc</label><textarea name="long_desc" onChange={this.handleInputChange} value={this.state["long_desc"]}></textarea></div>
            <input className="button" type="submit" value="Submit"/>
          </form>
          <div className="goal-form-wrapper">
            <form onSubmit={this.handleGoalSubmit} className="goal-form">
              <div><label>Project Goal</label><input type="text" name="description" onChange={this.handleInputChange} value={this.state.description} /></div>
              <input className="button" type="submit" value="Add"/>
            </form>
            <div>
              {goals}
            </div>
          </div>
          </div>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
     project: state.projects.displayedProject,
     projectImage: state.projects.projectImage,
     goals: state.projects.displayedGoals,
     projectUsers: state.projects.users,
     isLoadingProjects:state.projects.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit)
