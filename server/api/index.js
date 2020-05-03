const express = require('express')
const app = express()

module.exports = io => {
  const login = require('./login')(io)
  const chatMessage = require('./chatMessage')(io)

  app.use('/login', login)
  app.use('/chatMessage', chatMessage)
  return app
}
