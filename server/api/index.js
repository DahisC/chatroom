const express = require('express')
const app = express()

exports.global = {
  onlineUsers: []
}

exports.routes = io => {
  // socket API

  io.on('connection', socket => {
    socket.on('userLogIn', ({ account }) => {
      socket.alias = account
      io.emit('userLogIn', { account })
    })

    socket.on('disconnect', () => {
      io.emit('userLogOut', { account: socket.alias })
    })
  })

  // routes
  const login = require('./login')(io)
  const messages = require('./messages')(io)

  app.use('/login', login)
  app.use('/messages', messages)
  return app
}
