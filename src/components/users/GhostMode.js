import React from 'react'
import ToggleButton from 'react-toggle-button'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/users'
import { bindActionCreators } from 'redux'


class GhostMode extends React.Component {

  handleToggle = (event) => {
      console.log(!this.props.ghostMode, "toggle click");
      this.props.switchGhostMode(!this.props.ghostMode)
  }

  render(){
    const styles = {thumbStyles: {width: 30, height: 30, "box-shadow": "rgba(0, 0, 0, 0.09) 0px 0px 11px 2px"}, activeThumbStyle: {width: 30, height: 30, "box-shadow": "rgba(0, 0, 0, 0.09) 0px 0px 11px 2px"}}
    const paragraph = this.props.ghostMode ? {color: '#808080', transition: 'all 0.5s ease-in-out'} : null
      return(
        <div className="ghost-mode">
          <p style={paragraph}>Ghost Mode</p>
          <ToggleButton
            inactiveLabel={''}
            activeLabel={''}
            colors={{
              activeThumb: {
                base: 'rgb(250,250,250)',
              },
              inactiveThumb: {
                base: 'rgb(255, 196, 0)',
              },
              active: {
                base: 'rgb(207, 215, 220)',
                hover: 'rgb(177, 191, 215)',
              },
              inactive: {
                base: 'rgb(65,66,68)',
                hover: 'rgb(95,96,98)',
              }
            }}
            thumbStyle={styles.thumbStyles}
            thumbAnimateRange={[-10, 36]}
            value={!(this.props.ghostMode)}
            onToggle={this.handleToggle}
          />
        </div>
      )
  }


}

function mapStateToProps(state) {
  return {
     currentUser: state.users.currentUser,
     ghostMode: state.users.ghostMode,
     isLoading: state.users.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GhostMode)
