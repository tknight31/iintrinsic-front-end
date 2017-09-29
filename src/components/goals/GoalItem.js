import React from 'react'

const GoalItem = (props) => {

  const handleClick = () => {
    console.log(props.goal);
  }

  return (
    <div className="goal-item">
        {props.goal.description}
    </div>
  )

}

export default GoalItem
