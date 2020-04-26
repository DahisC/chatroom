const express = require('express')
const app = express()

module.exports = io => {
  const chatMessage = require('./chatMessage')(io)

  app.use('/chatMessage', chatMessage)
  return app
}
