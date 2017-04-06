export default {
  state: {
    users: []
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    },
    addUser (state, user) {

    }
  },
  getters: {
    getUsers (state) {
      return state.users
    }
  },
  actions: {
    setUsers ({commit}, users) {
      commit('setUsers', users)
    }
  }
}
