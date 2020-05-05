export const state = () => ({
  isLoggedIn: false,
  account: ''
})

export const mutations = {
  logIn(state, { account }) {
    state.account = account
    state.isLoggedIn = true
  },
  logOut(state) {
    state.isLoggedIn = false
  }
}

export const actions = {}
