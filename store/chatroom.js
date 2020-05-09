export const state = () => ({
  inputMessage: '',
  messages: [],
  onlineUsers: []
})

export const mutations = {
  pushMessage(state, { message }) {
    state.messages.push(message)
  },
  updateOnlineUsers(state, { onlineUsers }) {
    state.onlineUsers = onlineUsers
  },
  inputMessage(state, { text = state.inputMessage, emoji = '' }) {
    state.inputMessage = text + emoji
  }
}

export const actions = {
  async createMessage(ctx, { type, text }) {
    console.log(ctx)
    const res = await this.$axios.post('/messages', { message: { type, text } })
  },
  // 使用者登入
  socket_userLogIn({ commit }, { account, onlineUsers }) {
    commit('pushMessage', {
      message: { type: 'LOGIN', text: `－ ${account} 已連線 －` }
    })
    commit('updateOnlineUsers', { onlineUsers })
  },

  socket_userLogOut({ commit }, { account, onlineUsers }) {
    commit('pushMessage', {
      message: { type: 'LOGOUT', text: `－ ${account} 已離線 －` }
    })
    commit('updateOnlineUsers', { onlineUsers })
  },

  // 推播訊息
  socket_pushMessage({ commit }, { message }) {
    commit('pushMessage', { message })
  }
}

class Message {
  constructor({ type, message }) {
    this.type = type
    this.message = message
  }
}
