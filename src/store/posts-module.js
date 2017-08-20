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
    dummyPost: state => {
      return state.dummyPost
    },
    postById: (state, getters) => postId => {
      return state.posts.find(
        post => post.id === postId
      )
    },
    postByIdOrDummy: (state, getters) => postId => {
      return getters.postById(postId) || getters.dummyPost
    },
    viewPost (state, getters) {
      return getters.postByIdOrDummy(state.currentPostId)
    }
  }
}
