const express = require('express')
const router = express.Router()

let chatMessages = []

// router.route('/test', (req, res) => {
//   console.log('成功ㄌ')
//   res.send('我在chatmessage')
// })

module.exports = io => {
  router
    .route('/')
    .get((req, res) => {
      console.log(req.params)
      res.send('123')
    })
    .post((req, res) => {
      const message = req.body.message
      chatMessages.push(message)
      res.status(200).end()
      io.emit('pushMessage', { message })
    })
  return router
}
