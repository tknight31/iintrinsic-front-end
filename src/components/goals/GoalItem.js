import React from 'react'
import {Input} from 'react-materialize'

const GoalItem = (props) => {

  const handleClick = () => {
    props.goalUpdate(props.goal)
  }



  return (
    <div className="goal-item">
      <div>
          <Input onClick={console.log('what')} name={'"goal-' + props.goal.id + '"'} type='checkbox' label=" " defaultChecked='checked'/>
      </div>
        {props.goal.description}
    </div>
  )

}

export default GoalItem
