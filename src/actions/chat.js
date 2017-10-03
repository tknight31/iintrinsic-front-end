import * as chatApi from '../api/node/api'

export function joinChatSuccess(chatRoom){
  return {type: "JOIN_CHAT_SUCCESS", chatRoom}
}

export function createChatSuccess(chatRoom){
  return {type: "CREATE_CHAT_SUCCESS", chatRoom}
}

export function joinChat(chatRoom){
  return dispatch => {
    chatApi.joinChat(chatRoom)
    dispatch(joinChatSuccess(chatRoom))
  }
}

export function createChat(user, currentUser){
  return dispatch => {
    let temp = chatApi.createChat(user, currentUser)
    dispatch(createChatSuccess(temp))
  }
}
