import React from 'react'


const SkillItem = (props) => {
  const handleClick = () => {
    props.removeSkill(props.skill)
  }
  console.log(props);
  return (
    <div className="skill-item">
      {props.isCurrentUser || !localStorage.getItem("token")  ? <span onClick={handleClick}>Remove?</span> : null}
      {props.skill.name}
    </div>
  )

}

export default SkillItem
