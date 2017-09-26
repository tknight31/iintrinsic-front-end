import React from 'react'
import { Link } from 'react-router-dom'

const SkillItem = (props) => {

  const handleClick = () => {
    props.removeSkill(props.skill)
  }

  return (
    <div className="skill-item">
      <span onClick={handleClick}>Remove?</span>
      {props.skill.name}
    </div>
  )

}

export default SkillItem
