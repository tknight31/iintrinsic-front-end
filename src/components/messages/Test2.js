import React from 'react'
import {onMessage, emitMessage, joinChat, loadChat, clearChat} from '../../api/node/api'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../../actions/users'
import * as chatActions from '../../actions/chat'

class SocketTest extends React.Component {

  constructor(props){
    super(props)

    loadChat((message) => {
      let sender = ''
      if(message.user !== this.props.user.first_name){
        sender = 'from-them'
      } else {
        sender = 'from-me'
      }
      let chat = {user: message.user, content: message.content, sender}
      this.setState({
        message: [...this.state.message, chat]
      })
    })

    clearChat((message) => {
      this.setState({
        message
      })
    })

    onMessage((message) => {
      console.log(message)
      let audio = document.getElementById('audio')
      let sender = ''
      if(message.user !== this.props.user.first_name){
        sender = 'from-them'
      } else {
        sender = 'from-me'
      }
      let chat = {user: message.user, content: message.content, sender}
      this.setState({
        message: [...this.state.message, chat]
      },() => {
        if(message.user !== this.props.user.first_name){
          audio.play()
        }
      })
    })

    this.state = {
      message: [],
      content: ''
    }
  }

  componentDidMount(){
    this.props.actions.setCurrentUser()
    console.log('SocketTest has mounted!!!')
    // if(!!this.props.rehydrate.persistedState){
    //   this.props.chatActions.joinChat(this.props.rehydrate.persistedState.chat)
    // } else if(!!this.props.chat) {
    //   this.props.chatActions.joinChat(this.props.chat)
    // }
    this.props.chatActions.joinChat(this.props.chat)
    this.scrollToBottom()
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }

  updateMessage = event => {
    this.setState({
      content: event.target.value
    })
  }

  submitMessage = event => {
    event.preventDefault()
    emitMessage(this.props.user.first_name, this.state.content, Date.now(), this.props.chat)
    this.setState({
      content: ''
    })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight
  }

  render(){
    console.log(this.props)
    return (
      <div style={{minHeight: '30vh', maxHeight: '30vh', minWidth: '290px', marginTop: 0, position: 'relative', backgroundColor: '#EDEEEF'}}>

        <div style={{ minWidth: '100%', minHeight: '86.5%', maxHeight: '86.5%', overflowY: 'auto', position: 'absolute' }} ref={el => { this.messagesEnd = el }}>
          <section>
            <center>
              {this.state.message.length !== 0 &&
                this.state.message.map((element, i) => {
                  return (
                    <div key={'key-' + i} id={'chat-container-div'}>
                      <div className={element.sender}>
                        <p>{element.content}</p>
                      </div>
                      <div className={"clear"}></div>
                    </div>
                  )
                })
              }
              </center>
            <div style={{float: "left", clear: "both"}}>
            </div>
          </section>
        </div>
        <form onSubmit={this.submitMessage} style={{minHeight: '13.5%', maxHeight: '13.5%', minWidth: '100%', position: 'absolute', bottom: 0}}>
          <input type="text" onChange={this.updateMessage} value={this.state.content}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.users.currentUser,
    chat: state.chat.chat
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch),
    chatActions: bindActionCreators(chatActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketTest);
