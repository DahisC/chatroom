export const state = () => ({
  isLoggedIn: false,
  account: ''
})

export const mutations = {
  logIn(state, { account, socket }) {
    state.account = account
    state.isLoggedIn = true
    socket.open()
  },
  logOut(state) {
    state.isLoggedIn = false
  }
}

export const actions = {}
