const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// socket.io
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const apiRoutes = require('./api/index')(io)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // API 路徑
  app.use(bodyParser.json())
  app.use('/api', apiRoutes)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  io.on('connection', socket => {
    console.log('a user connected2')
  })

  // Listen the server
  // app.listen(port, host)
  server.listen(process.env.PORT || port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
