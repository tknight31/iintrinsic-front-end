import React from 'react'
import SkillItem from './SkillItem'


class SkillsList extends React.Component {

  render() {
    const SkillItems = this.props.skills.map((skill) => <SkillItem key={skill.id} skill={skill} removeSkill={this.props.removeSkill} isCurrentUser={this.props.isCurrentUser}/>)

      return (
        <div className="skills-list">
            {SkillItems}
        </div>
      )
    }
}



export default SkillsList
