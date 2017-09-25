import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsList = (props) => {


  
  const ProjectItems = props.projects.map((project) => <ProjectItem key={project.id} project={project}/>)
  return (
    <div className="project-container">
      {ProjectItems}
    </div>
  )
}

export default ProjectsList
