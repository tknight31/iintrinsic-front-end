import React from 'react'
import ProjectItem from './ProjectItem'
import { TweenMax } from 'gsap'

class ProjectsList extends React.Component {


  componentDidMount = () => {
     const els = document.querySelectorAll('.project-item')
     TweenMax.staggerFromTo(els, 1, {opacity: 0, y: -20}, {opacity: 1, y:0}, .2)
  }

  render() {
    const ProjectItems = this.props.projects.map((project) => <ProjectItem key={project.id} project={project}/>)

    return (
      <div className="project-container">
        <div ref="about">
          {ProjectItems}
        </div>
      </div>
    )
  }

}

export default ProjectsList
