const express = require('express')
const router = express.Router()

let onlineUsers = ['aaa']

module.exports = io => {
  router.post('/', (req, res) => {
    // 判斷使用者是否已上線
    const isDuplicated = new Set(onlineUsers).has(req.body.account)
    if (isDuplicated) return res.status(409).end()
    if (!isDuplicated) return res.status(200).end()
  })

  return router
}
