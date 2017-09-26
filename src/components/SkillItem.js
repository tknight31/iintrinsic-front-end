import React from 'react'
import { Link } from 'react-router-dom'

const SkillItem = (props) => {
  return (
    <div className="skill-item">
      {props.skill.name}
    </div>
  )

}

export default SkillItem
