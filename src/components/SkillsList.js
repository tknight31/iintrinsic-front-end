import React from 'react'
import SkillItem from './SkillItem'
import { connect } from 'react-redux'
import * as SkillsActions from '../actions/skills'
import { bindActionCreators } from 'redux'

class SkillsList extends React.Component {

  render() {
    const SkillItems = this.props.skills.map((skill) => <SkillItem key={skill.id} skill={skill}/>)

      return (
        <div className="skills-list">
            {SkillItems}
        </div>
      )
    }
}


function mapStateToProps(state) {
  return {
     skills: state.skills.list,
     isLoading:state.skills.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(SkillsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList)
