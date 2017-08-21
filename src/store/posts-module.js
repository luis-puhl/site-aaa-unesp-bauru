export const PostsModule = {
  namespaced: true,
  state: {
    dummyPost: {
      id: 0,
      nome: 'Titulo do Tile',
      class: 'tile-tile',
      img: '',
      conteudoModal: '# Conteúdo do post'
    },
    currentPostId: ''
  },
  getters: {
    dummyPost (state, getters, rootState, rootGetters) {
      return state.dummyPost
    },
    postById (state, getters, rootState, rootGetters) {
      return postId => {
        return rootState.posts.find(
          post => post.id === postId
        )
      }
    },
    postByIdOrDummy: (state, getters) => postId => {
      return getters.postById(postId) || getters.dummyPost
    },
    viewPost (state, getters) {
      return getters.postByIdOrDummy(state.currentPostId)
    }
  },
  mutations: {
    setCurrentPostId (state, payload) {
      state.currentPostId = payload
    }
  },
  actions: {
    fetchCurrentPostId (context, payload) {
      context.commit('setCurrentPostId', payload)
      context.dispatch('updatePost', context.getters.viewPost)
    },
    updatePost (context, payload) {
      context.dispatch('updatePost', payload, { root: true })
    }
  }
}
