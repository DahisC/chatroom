import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

// const socket = io(window.location.origin)
const socket = io.connect('/chatroom')

export default ({ store }) => {
  Vue.use(VueSocketIOExt, socket, { store })
}
