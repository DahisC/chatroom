export const state = () => ({
  account: ''
})

export const mutations = {
  logIn(state, { account }) {
    state.account = account
  }
}

export const actions = {
  async logIn(ctx, { account }) {
    const res = await this.$axios.post('/login', { account })
    console.log(res)
  }
}
