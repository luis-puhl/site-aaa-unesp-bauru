export const HomeModule = {
  namespaced: true,
  state: {
    sections: [
      {
        id: 'gestoes',
        nome: 'Gestões',
        posts: [
          'gestao-2017',
          'gestao-2016'
        ]
      },
      {
        id: 'produtos',
        nome: 'Produtos',
        posts: [
          'produto-Blusa',
          'produto-Moletom'
        ]
      }
    ]
  },
  getters: {
    sections: (state, getters, rootState, rootGetters) => {
      const sections = state.sections.map(
        section => {
          section = {...section}
          section.posts = section.posts.map(
            sectionPost => rootState.posts.find(post => post.id === sectionPost)
          )
          return section
        }
      )
      console.log({HomeModule: {sections}})
      return sections
    }
  }
}
