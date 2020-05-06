const express = require('express')
const app = express()

exports.global = {
  onlineUsers: [],
  messages: []
}

exports.routes = io => {
  // socket API

  io.on('connection', socket => {
    const socketID = socket.id

    socket.on('userLogIn', ({ account }) => {
      socket.account = account
      io.emit('userLogIn', { account })
    })

    socket.on('disconnect', () => {
      io.emit('userLogOut', { account: socket.alias })
    })

    socket.on('/messages#create', ({ message }) => {
      io.emit('pushMessage', {
        message: { ...message, account: socket.account, socketID }
      })
    })

    //
  })

  // routes
  const login = require('./login')(io)
  // const messages = require('./messages')(io)

  app.use('/login', login)
  // app.use('/messages', messages)
  return app
}
