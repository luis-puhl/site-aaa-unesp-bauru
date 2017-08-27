import * as firebase from 'firebase'

export const HomeModule = {
  namespaced: true,
  state: {
    sections: {
      'firebaseSectionsKey1': {
        id: 'gestoes',
        nome: 'Gestões',
        postsKeys: [
          'firebasePostKey1'
        ]
      },
      'firebaseSectionsKey2': {
        id: 'produtos',
        nome: 'Produtos',
        postsKeys: [
          'firebasePostKey2'
        ]
      }
    }
  },
  getters: {
    sections (state, getters, rootState, rootGetters) {
      const rootPosts = rootState.posts

      const loadPostFromKey = key => rootState.posts.find(post => post.key === key)
      const ObjectValues = obj => Object.keys(obj).map(k => ({ key: k, ...obj[k] }))

      const sections = ObjectValues(state.sections)
      .map(
        section => ({
          ...section,
          posts: section.postsKeys
          .map(loadPostFromKey)
          .filter(
            post => !!post && post.id
          )
        })
      )
      console.log('HomeModule getters sections', {rootPosts, stateSections: state.sections, sections})
      return sections
    }
  },
  mutations: {
    setSections (state, payload) {
      console.log('HomeModule setSections ', payload)
      state.sections = payload
    }
  },
  actions: {
    fetchSections (context, payload) {
      const sectionsRef = firebase.database().ref('sections')
      context.commit(
        'setFirebasePointer',
        {key: 'allPostsRef', value: sectionsRef},
        { root: true }
      )
      sectionsRef.on(
        'value',
        sectionsSnapshot => context.commit('setSections', sectionsSnapshot.val())
        // sectionsSnapshot => context.dispatch('fetchSectionsPosts', sectionsSnapshot.val())
      )
    },
    fetchSectionsPosts (context, payload) {
      const sectionsRef = firebase.database().ref('posts')
      context.commit(
        'setFirebasePointer',
        {key: 'allPostsRef', value: sectionsRef},
        { root: true }
      )
    }
  }
}
