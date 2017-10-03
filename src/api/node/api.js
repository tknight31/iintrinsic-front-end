import openSocket from 'socket.io-client'
//import UserApi from '../userApi'

const socket = openSocket('http://localhost:3002')

function createChat(user, currentUser){
  let numArray = [user, currentUser]
  numArray = numArray.sort((a, b) => {
    return a - b
  })
  socket.emit('create', numArray[0], numArray[1])
  return (numArray[0].toString() + '_' + numArray[1].toString())
}

function joinChat(chatRoom){
  socket.emit('room', chatRoom)
}

function onMessage(cb){
  socket.on('chat', message => {
    cb(message)
  })
}

function loadChat(cb){
  socket.on('load chat', message => {
    cb(message)
  })
}

function clearChat(cb){
  socket.on('clear chat', message => {
    cb(message)
  })
}

function emitMessage(usr, msg, date, chatRoom){
  console.log("emitting message, user:", usr)
  console.log("msg:", msg)
  console.log("date", date)
  console.log("chatroom", chatRoom)
  socket.emit('chat', usr, msg, date, chatRoom)
}

export {onMessage, emitMessage, createChat, joinChat, loadChat, clearChat}
