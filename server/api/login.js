const express = require('express')
const router = express.Router()

let global = require('./index').global

module.exports = io => {
  router.post('/', (req, res) => {
    // 判斷使用者是否已上線
    const isDuplicated = new Set(global.onlineUsers).has(req.body.account)
    if (isDuplicated) {
      res.status(409).end()
    } else {
      global.onlineUsers.push(req.body.account)
      res.status(200).end()
    }
  })

  return router
}
