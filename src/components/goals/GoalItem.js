import React from 'react'

const GoalItem = (props) => {

  const handleClick = () => {
    console.log(props.goal);
  }

  return (
    <div className="goal-item">
      <div class="checkboxFive">
        <input type="checkbox" value ="1" id="checkboxFiveInput" name=""/>
        <label for="checkboxFiveInput"></label>
      </div>
        {props.goal.description}
    </div>
  )

}

export default GoalItem
