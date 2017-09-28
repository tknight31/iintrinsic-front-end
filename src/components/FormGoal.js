import React from 'react'

const FormGoal = (props) => {

  const handleClick = () => {

    props.handleDelete(props.goal)
  }

  return (
    <div className="goal-el">
        {props.goal.desc} <span onClick={handleClick}>Remove?</span>
    </div>
  )

}

export default FormGoal
