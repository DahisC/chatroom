export const state = () => ({
  chatMessages: []
})

export const mutations = {
  pushMessage(state, { message }) {
    console.log('被呼叫了嗎', message)
    state.chatMessages.push(message)
  }
}

export const actions = {
  async createMessage(ctx, { message }) {
    const res = await this.$axios.post('/chatMessage', { message })
  },
  // 推播訊息
  socket_pushMessage({ commit }, { message }) {
    commit('pushMessage', { message })
  }
}
