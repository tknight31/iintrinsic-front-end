import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsList = (props) => {


  const ProjectItems = props.projects.map((project) => <ProjectItem key={project.id} project={project.name}/>)
  return (
    <ul>
      {ProjectItems}
    </ul>
  )
}

export default ProjectsList
