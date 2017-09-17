function ObjectValues (obj) {
  if (!obj || Array.isArray(obj)) {
    return obj
  }
  const values = Object.keys(obj)
  .filter(
    k => obj.hasOwnProperty(k)
  )
  .map(
    key => {
      if (typeof obj[key] === 'object') {
        return {key, ...obj[key]}
      } else {
        return {key, [key]: obj[key]}
      }
    }
  )
  return values
}

export const HomeModule = {
  namespaced: true,
  state: {
    dummySection: {
      id: '',
      key: '',
      nome: '',
      ordem: 0,
      postKeys: []
    },
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
      const loadPostFromKey = key => {
        if (!key) return
        return rootGetters.posts.find(post => post.key === key)
      }

      const sections = ObjectValues(state.sections)
      .map(
        section => ({
          ...section,
          posts: [].concat(section.postsKeys)
          .filter(publicacao => !!publicacao && publicacao.postKey)
          .map(publicacao => publicacao.postKey)
          .map(loadPostFromKey)
          .filter(
            post => !!post && post.id
          )
        })
      )
      .filter(
        section => (
          section.posts.length > 0 &&
          section.id !== state.dummySection.id &&
          section.key !== state.dummySection.key
        )
      )
      return sections
    }
  },
  mutations: {
    setSections (state, payload) {
      const sections = payload
      .map(
        section => ({
          ...state.dummySection,
          ...section,
          postsKeys: ObjectValues(section.postsKeys)
        })
      )
      .sort((a, b) => a.ordem - b.ordem)
      state.sections = sections
    }
  },
  actions: {
    fetchSections (context, payload) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']

      const sectionsRef = firebase.database().ref('sections')
      context.commit(
        'FirebaseModule/setFirebasePointer',
        {key: 'allPostsRef', value: sectionsRef},
        { root: true }
      )
      sectionsRef.on(
        'value',
        sectionsSnapshot => context.commit('setSections', ObjectValues(sectionsSnapshot.val()))
        // sectionsSnapshot => context.dispatch('fetchSectionsPosts', sectionsSnapshot.val())
      )
    },
    fetchPublicationList (context /*, payload */) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']

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
