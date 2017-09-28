import React from 'react'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'
import FormGoal from './FormGoal'

class ProjectsForm extends React.Component {
  state = {
    name: "",
    category: "",
    "short_desc" : "",
    "long_desc" : "",
    description : "",
    goals: []
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addProject({
      name: this.state.name,
      category: this.state.category,
      short_desc: this.state.short_desc,
      long_desc: this.state.long_desc,
      goals: this.state.goals
    })
    
    this.setState({
      name: "",
      category: "",
      "short_desc": "",
      "long_desc": "",
      description : "",
      goals: []
    })
      // do some stuff
  }

  handleGoalSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.description);

    this.setState({
      goals: [...this.state.goals, {desc: this.state.description}],
      description : ""
    })

  }

  handleDelete = (obj) => {
    console.log(obj);

    const goalsArr = this.state.goals

    const filteredGoals = this.state.goals.filter(goal => goal != obj)

    this.setState({
      goals: filteredGoals
    })

  }


  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }


  render() {

    const goals = this.state.goals.map((goal, index) => <FormGoal key={index} goal={goal} handleDelete={this.handleDelete}/>)
    console.log(this.state.goals);
    return (
      <div className="project-form-wrapper">
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





    )

  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null,mapDispatchToProps)(ProjectsForm)
