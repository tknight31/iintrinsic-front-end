import React from 'react'
import { connect } from 'react-redux'
import * as ProjectActions from '../actions/projects'
import { bindActionCreators } from 'redux'

class ProjectsForm extends React.Component {
  state = {
    name: "",
    category: "",
    "short_desc" : "",
    "long_desc" : ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addProject(this.state)
    this.setState({
      name: "",
      category: "",
      "short_desc": "",
      "long_desc": ""
    })
      // do some stuff
  }
  handleInputChange = (event) => {
    const currInput = event.target.name
    this.setState({
      [currInput] : event.target.value
    })
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div><label>Project Name</label><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /></div>
        <div><label>Project Category</label><input type="text" name="category" onChange={this.handleInputChange} value={this.state.category} /></div>
        <div><label>Project Short Desc</label><textarea name="short_desc" onChange={this.handleInputChange} value={this.state["short_desc"]}></textarea></div>
        <div><label>Project Long Desc</label><textarea name="long_desc" onChange={this.handleInputChange} value={this.state["long_desc"]}></textarea></div>
        <input type="submit" value="Submit"/>
      </form>

    )

  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(ProjectActions, dispatch)
}

export default connect(null,mapDispatchToProps)(ProjectsForm)
