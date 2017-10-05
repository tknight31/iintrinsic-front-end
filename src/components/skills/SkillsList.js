import React from 'react'
import SkillItem from './SkillItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SkillsList extends React.Component {

  render() {
    console.log(this.props.skills, "g error");
    const SkillItems = this.props.skills.map((skill) => <SkillItem key={skill.id} skill={skill} removeSkill={this.props.removeSkill} isCurrentUser={this.props.isCurrentUser}/>)

      return (
        <div className="skills-list">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}>
            {SkillItems}
           </ReactCSSTransitionGroup>
        </div>
      )
    }
}



export default SkillsList
