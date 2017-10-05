import React from 'react'
import ProjectItem from './ProjectItem'
import UserProjectItem from './UserProjectItem'
import { TweenMax } from 'gsap'

class ProjectsList extends React.Component {


  componentDidMount = () => {
     const els = document.querySelectorAll('.project-item')
     TweenMax.staggerFromTo(els, 1, {opacity: 0, y: -20}, {opacity: 1, y:0}, .2)
  }

  render() {
    console.log("ups", this.props.userProjects, "cps", this.props.createdProjects);
    const projectItems = !this.props.isUser ? this.props.projects.map((project) => <ProjectItem key={project.id} project={project}/>) : this.props.userProjects.map((project) => <UserProjectItem key={project.id} project={project}/>)
    const createdProjectItems = this.props.isUser ? this.props.createdProjects.map((project) => <UserProjectItem key={project.id} project={project}/>) : null

    return (
      <div className="project-container">
        <div ref="about">
          {createdProjectItems && this.props.isUser && createdProjectItems.length != 0 ? <h2>Created</h2> : null}
            {createdProjectItems}
          {projectItems && this.props.isUser && projectItems.length != 0 ? <h2>Collaborated</h2> : null}
            {projectItems}
        </div>
      </div>
    )
  }

}

export default ProjectsList
