function chatReducer(state = {chat:''}, action){


  switch (action.type) {
      case "JOIN_CHAT_SUCCESS":
        return action.chatRoom || state
      case "CREATE_CHAT_SUCCESS":
        return action.chatRoom
      default:
        return state
    }

}

export default chatReducer
