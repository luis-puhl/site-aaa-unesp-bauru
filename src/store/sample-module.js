export const SampleModule = {
  namespaced: true,
  state: {
    some: 'state'
  },
  getters: {
    someGetter (state, getters, rootState, rootGetters) {
      return state.some
    }
  },
  mutations: {
    someMutation (state, payload) {
      state.some = payload
    }
  },
  actions: {
    someAction (context, payload) {
      context.commit('someMutation', payload)
    }
  }
}
