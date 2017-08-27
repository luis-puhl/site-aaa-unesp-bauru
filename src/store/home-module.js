export const HomeModule = {
  namespaced: true,
  state: {
    sections: [
      {
        id: 'gestoes',
        nome: 'Gestões',
        posts: [
          {
            id: 'gestao-2017'
          },
          {
            id: 'gestao-2016'
          }
        ]
      },
      {
        id: 'produtos',
        nome: 'Produtos',
        posts: [
          {
            id: 'produto-Blusa'
          },
          {
            id: 'produto-Moletom'
          }
        ]
      }
    ]
  },
  getters: {
    sections (state, getters, rootState, rootGetters) {
      const sections = state.sections.map(
        section => ({
          ...section,
          posts: section.posts
          .map(
            sectionPost => rootState.posts.find(post => post.id === sectionPost)
          ).filter(
            post => !!post && post.id
          )
        })
      )
      console.log(sections)
      return sections
    }
  }
}
