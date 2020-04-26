import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

// const socket = io('http://localhost:3000')
const socket = io(window.location.origin)

export default ({ store }) => {
  Vue.use(VueSocketIOExt, socket, { store })
}
