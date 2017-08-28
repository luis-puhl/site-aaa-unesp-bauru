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
      context.commit('FirebaseModule/initFirebaseApp', null, { root: true })
      const sectionsRef = firebase.database().ref('sections')
      context.commit(
        'FirebaseModule/setFirebasePointer',
        {key: 'allPostsRef', value: sectionsRef},
        { root: true }
      )
      sectionsRef.on(
        'value',
        sectionsSnapshot => context.commit('setSections', sectionsSnapshot.val())
        // sectionsSnapshot => context.dispatch('fetchSectionsPosts', sectionsSnapshot.val())
      )
    },
    fetchPublicationList (context /*, payload */) {
      context.commit('FirebaseModule/initFirebaseApp', null, { root: true })
      console.log('PostsModule actions fetchAllPosts')
      if (context.rootGetters['FirebaseModule/firebasePointer']('publicPostsRef')) {
        return
      }
      const publicPostsRef = firebase.database().ref(`public`)
      context.commit(
        'FirebaseModule/setFirebasePointer',
        {key: 'publicPostsRef', value: publicPostsRef},
        { root: true }
      )
      publicPostsRef.on(
        'value',
        publicationsSnapShot => {
          const firebaseObjectValues = obj => Object.keys(obj).map(key => ({...obj[key], key}))
          const publicPostsList = firebaseObjectValues(publicationsSnapShot.val())
          // context.commit('setPublicationList', publicPostsList, { root: true })

          for (let publication of publicPostsList) {
            firebase.database().ref(`posts/${publication.key}`).once(
              'value',
              postSnapshot => context.commit(
                'updatePost',
                {key: publication.key, ...postSnapshot.val()},
                { root: true }
              )
            )
          }
        }
      )
    }
  }
}
