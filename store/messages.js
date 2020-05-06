export const state = () => ({
  messages: []
})

export const mutations = {
  pushMessage(state, { message }) {
    console.log(2)
    state.messages.push(message)
  }
}

export const actions = {
  async createMessage(ctx, { type, text }) {
    console.log(ctx)
    const res = await this.$axios.post('/messages', { message: { type, text } })
  },
  // 使用者登入
  socket_userLogIn({ commit }, { account }) {
    commit('pushMessage', {
      message: { type: 'LOGIN', text: `－ ${account} 已連線 －` }
    })
  },

  socket_userLogOut({ commit }, { account }) {
    commit('pushMessage', {
      message: { type: 'LOGOUT', text: `－ ${account} 已離線 －` }
    })
  },

  // 推播訊息
  socket_pushMessage({ commit }, { message }) {
    console.log(1)
    commit('pushMessage', { message })
  }
}

class Message {
  constructor({ type, message }) {
    this.type = type
    this.message = message
  }
}
